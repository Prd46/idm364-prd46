<!-- src/lib/IframePopup.svelte -->
<script lang="js">
    export let src;
    export let title;
  </script>
  
  <iframe {src} {title} />
  
  <style>
    iframe {
      width: 640px;
      height: 480px;
  
      position: absolute;
      left: 0;
      top: 100%;
    }
  </style>