import Vuex from 'vuex';

const slugify = require('slugify');

const resources = [
  {
    name: 'Khan Academy Linear Algebra Videos',
    link: 'https://www.khanacademy.org/math/linear-algebra',
    desc: 'sdf',
    tags: ['Linear Algebra'],
    format: ['Video'],
  },
  {
    name: 'Levandosky Stanford Linear Algebra Book ',
    link: 'https://www.amazon.com/gp/product/0536667470/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0536667470&linkCode=as2&tag=theopesoudats-20&linkId=YLLIM4C4LJSOZIQR',
    desc: 'sdf',
    tags: ['Linear Algebra'],
    format: ['Book'],
  },
  {
    name: 'University of Washington Linear Programming (Math 407) Course',
    link: 'https://sites.math.washington.edu/~burke/crs/407/lectures/',
    desc: 'sdf',
    tags: ['Linear Algebra'],
    format: ['Website'],
  },
  {
    name: 'Boyd Stanford Convex Optimization Book',
    link: 'http://stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf',
    desc: 'sdf',
    tags: ['Convex Optimization'],
    format: ['Book'],
  },
  {
    name: 'Think Stats: Probability and Statistics for Programmers ',
    link: 'https://www.amazon.com/gp/product/1449307116/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1449307116&linkCode=as2&tag=theopesoudats-20&linkId=B52ES7OEYBZRGKDA',
    desc: 'sdf',
    tags: ['Statistics'],
    format: ['Book'],
  },
  {
    name: 'Think Bayes',
    link: 'https://www.amazon.com/gp/product/1449370780/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1449370780&linkCode=as2&tag=theopesoudats-20&linkId=7OWH3ZFTBOJFLVUS',
    desc: 'sdf',
    tags: ['Statistics'],
    format: ['Book'],
  },
  {
    name: 'Differential Equations in Data Science',
    link: 'http://nbviewer.jupyter.org/github/URXtech/techblog/blob/master/continuousTimeMarkovChain/markovChain.ipynb',
    desc: 'sdf',
    tags: ['Differential Equations & Calculus'],
    format: ['Website'],
  },
  {
    name: 'Mining Massive Data Sets',
    link: 'https://www.amazon.com/gp/product/1107015359/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1107015359&linkCode=as2&tag=theopesoudats-20&linkId=YXKEJZGUQNHJINQ5',
    desc: 'sdf',
    tags: ['Data Mining'],
    format: ['Book'],
  },
  {
    name: 'Mining The Social Web',
    link: 'https://www.amazon.com/gp/product/1449367615/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1449367615&linkCode=as2&tag=theopesoudats-20&linkId=45QUMKPSJBSU2FZI',
    desc: 'sdf',
    tags: ['Data Mining'],
    format: ['Book'],
  },
  {
    name: 'Matering Machine Learning',
    link: 'https://machinelearningmastery.com/start-here/',
    desc: 'sdf',
    tags: ['General Machine Learning'],
    format: ['Website'],
  },
  {
    name: 'Machine Learning with Python',
    link: 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v',
    desc: 'sdf',
    tags: ['General Machine Learning'],
    format: ['Video'],
  },
  {
    name: 'Python Machine Learning Blueprints',
    link: 'https://www.amazon.com/Python-Machine-Learning-Blueprints-Intuitive-ebook/dp/B01CID6IGQ',
    desc: 'sdf',
    tags: ['General Machine Learning'],
    format: ['Book'],
  },
  {
    name: 'Basic Reinforcement Learning',
    link: 'https://github.com/vmayoral/basic_reinforcement_learning',
    desc: 'sdf',
    tags: ['Reinforcement Learning'],
    format: ['Website'],
  },
  {
    name: 'Advanced Topics: RL 2015 (COMPM050/COMPGI13)',
    link: 'http://www0.cs.ucl.ac.uk/staff/D.Silver/web/Teaching.html',
    desc: 'sdf',
    tags: ['Reinforcement Learning'],
    format: ['Website'],
  },
  {
    name: 'DeepLearning.ai',
    link: 'https://www.deeplearning.ai/',
    desc: 'sdf',
    tags: ['Deep Learning'],
    format: ['Website'],
  },
  {
    name: 'Advanced Machine Learning Specialization | Coursera',
    link: 'https://www.coursera.org/specializations/aml',
    desc: 'sdf',
    tags: ['Deep Learning'],
    format: ['Website'],
  },
  {
    name: 'CS231n: Convolutional Neural Networks for Visual Recognition',
    link: 'http://cs231n.stanford.edu/',
    desc: 'sdf',
    tags: ['Convolutional Neural Networks'],
    format: ['Website'],
  },
  {
    name: 'How Convolutional Neural Networks work - Youtube',
    link: 'https://www.youtube.com/watch?v=FmpDIaiMIeA',
    desc: 'sdf',
    tags: ['Convolutional Neural Networks'],
    format: ['Video'],
  },
  {
    name: 'The Unreasonable Effectiveness of Recurrent Neural Networks',
    link: 'http://karpathy.github.io/2015/05/21/rnn-effectiveness/',
    desc: 'sdf',
    tags: ['Recurrent Neural Networks'],
    format: ['Website'],
  },
];

export function getStore() { // eslint-disable-line
  const store = new Vuex.Store({
    state: {
      // selectedItem: {},
    },
    mutations: {
      // selectItem(state, payload) {
      //   state.selectedItem = payload.item;
      // },
    },
    getters: {
      findItem: () => (slug) => {
        function find(i) {
          return slugify(i.title.toLowerCase()) === slug;
        }

        // let item = breakfast.find(find);
        // if (item) return item;

        return {};
      },
      filterItems: () => (category, format) => {
        const result = resources.filter((res) => {
          const hasCat = category ? res.tags.indexOf(category) !== -1 : true;
          const hasFormat = format ? res.format.indexOf(format) !== -1 : true;
          return hasCat && hasFormat;
        });

        return result;
      },
    },
  });

  return store;
}
