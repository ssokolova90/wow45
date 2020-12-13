<template>

  <div
    :class="$blockClassName"
    @click="nextLogo()"
    :style="{backgroundImage: 'url(' + logo.picture + ')' }">


    <div :class="$e('title')">
      {{ logo.title }}
    </div>

    <div :class="$e('paginator')">

      <div
        v-for="(logo, index) in logoList"
        :class="(index === selectedLogo) ? $e('paginator-button') : $e('paginator-button','selected')"
        @click="setLogo(index)">

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'MainPicture',
    data() {
      return {
        selectedLogo: 0
      }
    },
    computed: {

      logo() {

        if (this.selectedLogo  < this.logoList.length) {
          return this.logoList[+this.selectedLogo];
        }
        return {
          title: 'Международный патриотический проект «Парад Памяти»',
          picture: '/images/assets/main.jpg'
        }
      },

      logoList() {

        let logoList = this.$pages('MainLogo').map(logo => {

          if (!logo || !logo.frontmatter) {
            return {}
          }

          return {
            title: logo.title,
            picture: logo.frontmatter.picture
          };
        });

        return logoList;
      }

    },
    methods: {
      setLogo(number) {

        this.selectedLogo = (+number < this.logoList.length) ? +number : 0;
      },
      nextLogo() {

        let nextSelected = this.selectedLogo + 1;
        if (nextSelected >= this.logoList.length) {
          nextSelected = 0;
        }
        this.selectedLogo = nextSelected;
      }
    },
    mounted() {
      setInterval(()=> {
        this.nextLogo();
      }, 10000);
    }
  }
</script>

<style lang="scss">

  @import './MainPictureDesktop.scss';
  @import './MainPictureMobile.scss';
</style>

