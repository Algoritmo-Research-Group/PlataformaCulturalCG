<template>
  <div class="body" style="background-color: #e9e9e9;">
    <div class="row justify-between">

      <q-parallax
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <h1 class="text-white" style="margin-left:">Nossa História</h1>
      </q-parallax>
      <div class="q-px-lg q-pb-md" style="margin-top: 60px;">
        <q-timeline :layout="layout" color="secondary" style="width:100%;">
          <q-timeline-entry heading class="timeline-item">
            <div class="" style="display: flex; flex-flow: center; flex-direction: column; align-items: center;">
              <span>Timeline Algo+Ritmo</span>
              <q-btn flat rounded label="Ir a Origem" icon="arrow_downward" style="margin-top: 20px;"/>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
            class="timeline-item"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            side="right"
            icon="delete"
            class="timeline-item"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>November, 2017</q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
            class="timeline-item"
          >
            <div>
              lorem ipsum dolor sit amet, consectetur adipisicinge velit
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
            class="timeline-item"
          >
            <div>
              lorem ipsum dolor sit amet, consectetur adipisicinge velit
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
            color="orange"
            icon="done_all"
            class="timeline-item"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
            class="timeline-item"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Ínicio"
            subtitle="February 22, 1986"
            side="left"
            class="timeline-item"
          >
            <span>
              Texto exemplo: entrada inicial.
            </span>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHistory',
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    // layout() {
    //   return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose');
    // },

  },
};
</script>
