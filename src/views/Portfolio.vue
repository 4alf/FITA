<template>
    <section id="portfolio" class="page v-portfolio">
      <div class="section__header">
        <span
          ><h1>Portfolio.</h1>
          <h6>We bring the needed spark</h6></span
        >
        <button class="button">
          <router-link to="/portfolio/all">View All</router-link>
        </button>
      </div>
      <portfolio-carousel />
      <!-- <portfolio-card
        v-for="(item, index) in portfolioItems"
        :key="index"
        :img="item.img"
        :title="item.title"
        :date="item.date"
        :body="item.body"
        :category="item.category"
        :client="item.client"
        :technologies="item.technologies"
      ></portfolio-card> -->
      <pagination-mark />
    </section>
  </template>

<script>
import PortfolioCarousel from '@/components/PortfolioCarousel.vue';
import PaginationMark from '@/components/PaginationMark.vue';
// import PortfolioCard from '@/components/PortfolioCard.vue';
// import mapState from 'vuex';

export default {
  name: 'Portfolio',
  data() {
    return {
      portfolioItems: [
        {
          img: '"../assets/img/Adopt a Pet.png"',
          title: 'Shape the future',
          date: 'May 15, 2020',
          body: '',
          category: '',
          client: '',
          technologies: [''],
        },
        {
          img: '"../assets/img/Borderless - Transfer.png"',
          title: 'Shape the future',
          date: 'May 15, 2023',
          body: '',
          category: '',
          client: '',
          technologies: [''],
        },
        {
          img: '"../assets/img/noah-buscher-1-kPytLsVkY-unsplash.jpg"',
          title: 'Shape the future',
          date: 'May 15, 2021',
          body: '',
          category: '',
          client: '',
          technologies: [''],
        },
        {
          img: '"../assets/img/james-francis-AFLiCZFVog4-unsplash.jpg"active',
          title: 'Shape the future',
          date: 'May 15, 2022',
          body: '',
          category: '',
          client: '',
          technologies: [''],
        },
      ],
    };
  },
  components: {
    // PortfolioCard,
    PortfolioCarousel,
    PaginationMark,
  },
};
</script>

  <style lang="stylus" scoped>
  .v-portfolio {
    background: var(--bg-color--primary);
    padding: 8em 0;
    overflow-x: hidden;
    display: flex;

    .section__header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1.5em 10em;

      @media screen and (max-width: 800px) {
        padding: 1.5em 1.5em;
      }

      span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
          position: relative;
          font-size: 1.8rem;
          font-family: var(--font-family--primary);
          font-weight: 800;

          @media screen and (max-width: 800px) {
            font-size: 1.2rem;
          }
        }

        h6 {
          padding: 0.2em 0;
          font-size: 1rem;
          color: var(--text-color--alt);
          text-transform: uppercase;

          @media screen and (max-width: 800px) {
            font-size: 0.7rem;
          }
        }
      }

      &:before {
        content: '';
        position: absolute;
        // left: 10em;
        top: 0;
        border: solid thin var(--border-color--primary);
        width: 2.2em;

        @media screen and (max-width: 800px) {
          left: 1.2em;
        }
      }

      button {
        margin-left: auto;
      }
    }

    .portfolioItems {
      width: 100%;
    }

    a {
      color: var(--text-color--primary);
    }
  }
  </style>
