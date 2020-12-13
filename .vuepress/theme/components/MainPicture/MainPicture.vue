<template>

  <div
    :class="$blockClassName"
    @click="nextLogo()"
    :style="{backgroundImage: 'url(' + logo.picture + ')' }">


    <div :class="$e('title')">
      {{ logo.title }}
    </div>

<!--    <div v-for="logo in logoList">-->
<!--      {{ JSON.stringify(logo) }}-->
<!--    </div>-->

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

        console.log('LogoList', logoList);

        return logoList;
      }

    },
    methods: {
      nextLogo() {

        let nextSelected = this.selectedLogo + 1;
        if (nextSelected >= this.logoList.length) {
          nextSelected = 0;
        }
        this.selectedLogo = nextSelected;
      }
    },
  }
</script>

<style lang="scss">

  @import './MainPictureDesktop.scss';
  @import './MainPictureMobile.scss';
</style>

