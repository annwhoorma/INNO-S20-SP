<template>
  <div id="app">
    <div>
      <Instruction
        :instructions="instructions"
        @select="selectInstruction"
        @upload="uploadInstruction"
      />
      <div v-if="instruction" class="card" style="margin-top: 20px; width: 430px">
        <p class="label bold">files</p>
        <FileUpload ref="fileUpload" v-model="instruction.files" @upload="validateMediaLinks" />
      </div>
    </div>
    <Step :steps="steps" @select="selectStep" />
    <Asset :assets="assets" />
    <Render :assets="assets" :files="files" />
  </div>
</template>

<script>
import Instruction from "./components/Instruction";
import Step from "./components/Step";
import Asset from "./components/Asset";
import Render from "./components/Render";
import FileUpload from "./components/FileUpload";

var JSZip = require("jszip");

import Vue from "vue";
Vue.prototype.$toFloat = f => {
  f = parseFloat(f);
  return isNaN(f) ? 0 : f;
};

export default {
  name: "App",
  components: {
    Instruction,
    Step,
    Asset,
    Render,
    FileUpload
  },
  data() {
    return {
      instruction: null,
      instructions: [],
      files: [],
      steps: [],
      assets: []
    };
  },
  async mounted() {
    // let ids = await fetch(
    //   "https://ad0d9c3e.ngrok.io/instructions_list"
    // ).then(r => r.json());
    // for (let id of ids) {
    //   let blob = await fetch(
    //     "https://ad0d9c3e.ngrok.io//instruction?id=" + id
    //   ).then(r => r.blob());
    //   await this.downloadInstruction(blob);
    // }
  },
  methods: {
    validateMediaLinks() {
      const missing = file =>
        !this.instruction.files.find(f => f.name === file);

      if (missing(this.instruction.preview_url))
        this.instruction.preview_url = "";

      for (const step of this.instruction.steps) {
        if (missing(step.preview_url)) step.preview_url = "";
        for (const asset of step.assets) {
          if (missing(asset.media.url)) {
            asset.media.url = "";
            asset.media.type = 0;
          }
        }
      }
    },
    selectInstruction(index) {
      this.instruction =
        this.instructions?.length > 0 ? this.instructions[index] : null;
      this.steps = this.instruction?.steps;
      this.files = this.instruction?.files;
    },
    selectStep(index) {
      this.assets = this.steps?.length > 0 ? this.steps[index].assets : null;
    },
    async downloadInstruction(blob) {
      let zip = new JSZip();
      await zip.loadAsync(blob);

      let instruction = {
        index: JSON.parse(await zip.file("index.json").async("string")),
        steps: JSON.parse(await zip.file("steps.json").async("string")),
        files: []
      };

      var files = await Object.keys(zip.folder().files)
        .filter(n => n.startsWith("media/"))
        .map(n => zip.files[n])
        .filter(f => !f.dir);

      for (let file of files) {
        let obj = await this.$refs.fileUpload.deserealizeFile(file);
        instruction.files.push(obj);
      }

      this.instructions.push(instruction);
    },
    uploadInstruction() {
      let { steps, files, index } = this.instruction;

      index.step_count = steps.length;
      index.last_modified = Date.now();
      steps.forEach(s =>
        s.assets
          .filter(a => a.media.url)
          .forEach(
            a => (a.media.type = files.find(f => f.name === a.media.url).type)
          )
      );

      let zip = new JSZip();
      zip.file(index.id + "/index.json", JSON.stringify(index));
      zip.file(index.id + "/steps.json", JSON.stringify(steps));
      files.forEach(f => {
        zip.file(
          index.id + "/media/" + f.name,
          f.content.substring(f.content.indexOf("base64,") + "base64,".length),
          { base64: true }
        );
      });

      zip
        .generateAsync({
          type: "blob",
          compression: "DEFLATE"
        })
        .then(zip => {
          let req = new XMLHttpRequest();
          req.open("POST", "https://ad0d9c3e.ngrok.io", true);
          req.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
          req.send(zip);
        });
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 225px) 1fr;
}
</style>
