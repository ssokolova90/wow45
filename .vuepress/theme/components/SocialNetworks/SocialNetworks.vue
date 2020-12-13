<template>

  <div :class="$blockClassName">

    <a
      v-for="network in socialNetworksList"
      :class="$e('link')"
      :href="network.url">

      <img
        :src="network.icon"
        v-if="network"
        :alt="network.name"
        :class="$e('image')">

    </a>
  </div>

</template>


<script>

  export default {
    name: 'SocialNetworks',
    data() {
      return {
        networks: [
          {name: 'Facebook', icon: 'fb.svg', title: 'Facebook', url: 'https://facebook.com'},
          {name: 'Google+', icon: 'gp.svg', title: 'Google+', url: 'https://myaccount.google.com'},
          {name: 'Instagram', icon: 'inst.svg', title: 'Instagram', url: 'https://instagram.com'},
          {name: 'OK', icon: 'ok.svg', title: 'OK', url: 'https://ok.ru'},
          {name: 'Twitter', icon: 'tw.svg', title: 'Twitter', url: 'https://twitter.com'},
          {name: 'Vkontakte', icon: 'vk.svg', title: 'Vkontakte', url: 'https://vk.com'},
        ],
        icons: {
          'vkontake': 'vk.svg',
          'odnoklassniki': 'ok.svg',
          'instagram': 'inst.svg',
          'facebook': 'fb.svg',
          'twitter': 'tw.svg',
          'googleplus': 'gp.svg',
        }
      }
    },
    computed: {

      socialNetworksList() {

        let socials = this.$pages('/social') || [];


        return socials.map(social => {

          if (!social || !social.frontmatter) {
            return {
            };
          }

          return  {
            title: social.frontmatter.title,
            url: social.frontmatter.url,
            icon:  this.$withBase('/images/assets/social/' + this.icons[social.frontmatter.Network])
          };
        });
      }

    }
  }
</script>

<style lang="scss">

  @import './SocialNetworksDesktop.scss';
  @import './SocialNetworksMobile.scss';

</style>