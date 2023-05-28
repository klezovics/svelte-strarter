<script>
    import RedBox from "./RedBox.svelte";
    import ComplexBox from "./ComplexBox.svelte";

    let name = 'Arthur';
</script>


<div>
    <h1>Tutorial</h1>
    <!--    Feature 1 -> Can use variables from script tag in template-->
    <!--    <h2>Hello, {name.toUpperCase()}</h2>-->

    <!--    Feature 3 -> Can compose components-->
    <!--    <RedBox text={name}/>-->

    <!--    Feature 5 -> Can pass in children to component and reference them as <slot> tag-->
    <!--    <RedBox text='Merlin'>-->
    <!--        <p>Some text</p>-->
    <!--        <p>Some more text</p>-->
    <!--    </RedBox>-->
    <!--        <RedBox text='Empty box'>-->
    <!--        </RedBox>-->

    <!--  Feature 7 -> you can define named slots-->
    <ComplexBox>
        <h1 slot='header'>Title of page</h1>
        <span slot='article'>This is a cool description</span>
        <span slot='footer'>This is a cool footer</span>
    </ComplexBox>
</div>

<style>
    /*Feature 2 -> Can add CSS to component*/
    h1 {
        color: blue;
    }
</style>