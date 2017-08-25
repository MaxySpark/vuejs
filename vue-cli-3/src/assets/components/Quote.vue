<template>
  <div class="container">
      <!-- <p>
          {{ quote }}
      </p> -->

    <!-- <slot></slot> -->

    <div class="title">
        <slot name="title"></slot>
        <span style="color:gray;" name="subtitle">The Subtitle</span>
    </div>
    <hr>
    <div>
        <slot name="content"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
  </div>
</template>
<script>
    export default {
        // props: {
        //     quote: String
        // }
    }
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    h2 {
        color: RED;
    }

    .title {
        font-style: italic;
    }
</style>
