<script>
</script>

<div>
<!--  Feature 7 -> you can define named slots-->
  <header>
      <slot name="header">Default header</slot>
  </header>
  <article>
      <slot name="article">Default article</slot>
  </article>
  <footer>
      <slot name="footer">Default footer</slot>
  </footer>
</div>

<style>
    div {
        background-color: red;
        color: white;
    }
</style>