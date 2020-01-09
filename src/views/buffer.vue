<template>
  <div class="content">
    <q-btn to="/" style="position: absolute; bottom: 10px; left: 0px; z-index: 1; width: 9rem; height: 3.5rem; border-radius: 0px;
      background-color: black; box-shadow: none;">
      <div class="row" style="justify-content: center; align-items: center;">
        <q-icon name="keyboard_arrow_left" class="text-white"></q-icon>
        <span style="font-size: 15px; font-weight: 800; color: white">Mapa</span>
      </div> 
    </q-btn>
    <div class="card">
      <div class="col-l">
        <span style="font-size: 35px; align-self: flex-start; color: white; font-weight: normal; 
          letter-spacing: 2px; font-family: 'Monoton">AGENDA CULTURAL</span>
        <span style="margin-bottom: 24px; color: white; font-weight: bolder">Campo Grande - MS</span>
        <q-card class="event-field column" style="padding: 8px; min-heigth: 400px">
          <q-card-section>
            <div class="text-h5" style="align-self: center">Cromossomos</div>
            
          </q-card-section>
          <q-separator inset />
          <img src="../assets/people02.jpg" style="max-height: 150px; border-radius: 5px">
          <div class="user" style="margin-top: 8px">
            <q-avatar size="3em">
              <img src="../assets/avatar01.jpg">
            </q-avatar>
            <q-badge outline align="bottom" color="teal" style="margin-left: 8px">
              categoria
            </q-badge>
            <p style="margin-top: 16px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam voluptatem veritatis adipisci labore accusantium quasi iste
            </p>
          </div>

        </q-card>
      </div>

      <div class="col-m">
        <div style="position: absolute; top: 30px">
          <q-table
            grid
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
            hide-header
          >
            <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
      </div>
      <div class="col-r">
        <q-date
          class="date"
          title="Alô"
          subtitle="hello"
          v-model="date"
          :locale="myLocale"
          :events="events"
          :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
          minimal
          today-btn
          default-year-month="2020/01"
          flat
          color="yellow"
          text-color="black"
          style="height: 400px"
        />
        <span class="info-col-r"> <strong> {{ formated_date }} </strong></span>
      </div>
    </div>
    
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'SchedulePage',
  data() {
    return {
      date: '2020/01/01',
      // abaixo YYYY/MM/DD
      events: [ '2020/01/01', '2020/01/03', '2020/01/23' ],
      myLocale: {
      /* starting with Sunday */
      days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
      daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julio_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
      firstDayOfWeek: 1,
      url: '../assets/people02.jpg',
      contacts: [ 
        { id: 1, name: 'Ruddy Jedrzej', email: 'rjedrzej0@discuz.net', letter: 'R' },
        { id: 2, name: 'Mallorie Alessandrini',  email: 'malessandrini1@marketwatch.com', letter: 'M' },
        { id: 3, name: 'Elisabetta Wicklen', email: 'ewicklen2@microsoft.com', letter: 'E' },
        { id: 4, name: 'Seka Fawdrey', email: 'sfawdrey3@wired.com', letter: 'S' } 
      ],
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: '',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'img', align: 'center', label: '', field: 'img', sortable: true },
        { name: 'local', label: '', field: 'loc', sortable: true },
        { name: 'user', label: '', field: 'user' }
      ],
      data: [
        { name: 'evento', img: 'algo', local: 'brava', user: 'usuario' },
        { name: 'evento2', img: 'algo', loc: 'rua', user: 'beltrano' },
        { name: 'evento3', img: 'algo', loc: 'praça', user: 'ciclano' },
        { name: 'evento4', img: 'algo', loc: 'ufms', user: 'fulano' },
      ]
    }

    }
  },
  computed: {
    formated_date(){
      let timeStamp = this.date
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
      return formattedString
    }
  }
}
</script>

<style lang="sass">
// .content
//   height: 100vh
//   width: 100%

// .card
//   width: 100%
//   height: 100%
//   position: absolute
//   top: 50%
//   left: 50%
//   transform: translate(-50%, -50%)
//   display: flex
//   flex-direction: row
//   padding: 0px

// .col-l
//   display: flex
//   flex-direction: column
//   width: 300px
//   height: 100%
//   padding: 8px
//   position: absolute
//   left: 0px
//   background-color: #248eff

// .col-m
//   box-sizing: border-box
//   display: flex
//   flex-direction column
//   min-width: 500px
//   padding: 8px
//   position: absolute
//   left: 300px

// .col-r
//   display: flex
//   flex-direction column
//   width: 320px
//   height: 100%
//   padding: 8px
//   position: absolute
//   right: 0px
//   padding: 8px
//   background-color: #fbec5d

// .date
//   position: absolute
//   top: 32px
//   right: 8px

// .info-col-r
//   font-size: 22px
//   font-family: 
//   position: absolute
//   bottom: 0px
//   right: 50%
//   transform: translate(50%)


</style>
