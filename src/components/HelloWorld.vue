<template>
  <div class="hello container">
    <h2>{{ msg }}</h2>

    <div class='row filters'>
      <div class='col-12 col-md-2'>
        <model-select :options="catOptions"
                                v-model="selectedCat"
                                placeholder="Category">
         </model-select>
       </div>

       <div class='col-12 col-md-2'>
         <model-select :options="formatOptions"
                                 v-model="selectedFormat"
                                 placeholder="Format">
          </model-select>
        </div>
    </div>

    <div class='row text-left'>
      <div class='col-12 col-md-3' v-for='resource in resources'>
        <div class='card'>
          <strong>{{resource.name}}</strong>

          <div class='tags'>
            <b-badge pill variant="primary">{{resource.tags[0]}}</b-badge>
            <b-badge pill variant="secondary">{{resource.format[0]}}</b-badge>
          </div>

          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> -->

          <a :href='resource.link' target='_blank' class='btn btn-primary'>View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'HelloWorld',
  components: {
    ModelSelect
  },
  metaInfo () {
    const title = `Machine Learning Tutorials`;

    return {
      title,
      meta: [
        { vmid: 'description', name: 'description', content: title }
      ]
    };
  },
  data() {
    return {
      msg: 'Machine Learning Tutorials',
      catOptions: [
        { value: 'Linear Algebra', text: 'Linear Algebra' },
        { value: 'Convex Optimization', text: 'Convex Optimization' },
        { value: 'Statistics', text: 'Statistics' },
        { value: 'Differential Equations & Calculus', text: 'Differential Equations & Calculus' },
        { value: 'Data Mining', text: 'Data Mining' },
        { value: 'General Machine Learning', text: 'General Machine Learning' },
        { value: 'Reinforcement Learning', text: 'Reinforcement Learning' },
        { value: 'Deep Learning', text: 'Deep Learning' },
        { value: 'Convolutional Neural Networks', text: 'Convolutional Neural Networks' },
        { value: 'Recurrent Neural Networks', text: 'Recurrent Neural Networks' },
      ],
      selectedCat: {
        value: '',
        text: '',
      },
      formatOptions: [
        { value: 'Book', text: 'Book' },
        { value: 'Website', text: 'Website' },
        { value: 'Video', text: 'Video' },
      ],
      selectedFormat: {
        value: '',
        text: '',
      },
    };
  },
  computed: {
    resources() {
      const result = this.$store.getters.filterItems(this.selectedCat.value, this.selectedFormat.value);
      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  h2 {
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .filters {
    margin-bottom: 2em;
  }

  .card {
    padding: 1em;
    min-height: 250px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
    margin-bottom: 1em;
  }

  .badge-primary {
    background: #FF6D4A;
  }

  strong {
    /* color: #FF6D4A; */
    font-size: 16px;
  }

  a {
    color: #fff !important;
    width: 80px;
    position: absolute;
    bottom: 10px;
  }
</style>
