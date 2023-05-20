<script>
    import { page } from '$app/stores';
    $: console.log($page)
</script>

<h1>Product page</h1>
<h1>Product page : {$page.params.id}</h1>