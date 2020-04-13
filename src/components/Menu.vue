<template>
    <nav class="navbar is-fixed-top">
    <div class="navbar-middle">
        <a id="outfit-link" class="navbar-item">
            1. The Outfit
        </a>
        <a id="data-link" class="navbar-item">
            2. The Background Data
        </a>
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

    .navbar-middle {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        text-align: center;
        flex-direction: row;
    }

    .is-active {
        border-bottom-color: #3273dc;
        color: #3273dc;
        border-bottom-width: 2px;
        /* margin-bottom: -2px; */
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
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

            if (dataLink.classList.contains('is-active')) {
                 dataLink.classList.remove('is-active');
            }
            outfitLink.classList.add('is-active');
        });

        dataLink.addEventListener('click', () => {
            dataSection.scrollIntoView({ 
            behavior: 'smooth' 
            });

            if (outfitLink.classList.contains('is-active')) {
                 outfitLink.classList.remove('is-active');
            }
            dataLink.classList.add('is-active');
        });

    })

    export default {
        name: 'Menu'
    }

</script>

