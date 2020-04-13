<template>
    <nav class="navbar is-fixed-top">
        <div>
        <div class="navbar-middle">
        <a id="outfit-link" class="navbar-item">
            1. The Outfit
        </a>
        <a id="data-link" class="navbar-item">
            2. The Background Data
        </a>
        </div>
    </div>
    </nav>
</template>

<style scoped>
    .navbar {
        box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,0.1), 0 0px 0 1px rgba(10,10,10,0.02);
        justify-content: center;
        align-items: center;
        display: flex;
        text-align: center;
    }
    /* ul {
        position: fixed;
        background-color: grey;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 9999;
        display: flex;
        min-height: 60px;
        justify-content: center;
        align-items: center;
    } */
</style>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const outfitLink = document.querySelector('#outfit-link');
        const dataLink = document.querySelector('#data-link');

        const outfitSection = document.querySelector('.part-1-section');
        const dataSection = document.querySelector('.part-2-section');

        outfitLink.addEventListener('click', (e) => {
            outfitSection.scrollIntoView({ 
            behavior: 'smooth' 
            });
        });

        dataLink.addEventListener('click', () => {
            dataSection.scrollIntoView({ 
            behavior: 'smooth' 
            });
        });

    })

    export default {
        name: 'Menu'
    }

</script>

