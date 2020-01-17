<template>
  <div class="content">
    <q-btn class="btn-back" to="/">
      <div class="row" style="justify-content: center; align-items: center;">
        <q-icon name="keyboard_arrow_left" class="text-white"></q-icon>
        <span style="font-size: 15px; font-weight: 800; color: white">Mapa</span>
      </div> 
    </q-btn>
    <q-btn round class="btn-date-picker" @click="pickDate=!pickDate">
      <div class="row" style="justify-content: center; align-items: center;">
        <q-icon name="fas fa-calendar-week" class="text-white" size="1.5em"></q-icon>
      </div> 
    </q-btn>
    
    <div class="col-l">
      <span class="ttl">AGENDA CULTURAL</span>
      <span class="subtitle">CAMPO GRANDE</span>
    </div>

    <div class="col-m">
      
    </div>
    <div class="col-r">
      <div class="date-components">
        <q-date
          class="date-media"
          v-if="pickDate===true"
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
        />
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
        />
      </div>
      <span class="info-date-media"> <strong> {{ formated_date }} </strong></span>
    </div>
    
    
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data() {
    return {
      pickDate: false,
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
      }
    } 
  },
  computed: {
    formated_date(){
      let timeStamp = this.date
      let formattedString = date.formatDate(timeStamp, 'DD-MM-YYYY')
      return formattedString
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100%;
  background-image: none;
}
.card {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  padding: 0px;
}

.col-l {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  padding: 8px;
  position: absolute;
  left: 0px;
  background-color: #248eff;
}

.col-m {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 8px;
  position: absolute;
  left: 300px;
}

.col-r {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  padding: 8px;
  position: absolute;
  right: 0px;
  padding: 8px;
  background-color: #fbec5d;
}

.date {
  position: absolute;
  top: 32px;
  right: 8px;
}
  
.info-col-r {
  font-size: 22px;
  position: absolute;
  bottom: 0px;
  right: 50%;
  transform: translate(50%);
}

.btn-back {
  display: block;
  position: absolute; 
  bottom: 10px; 
  left: 0px; 
  z-index: 1; 
  width: 9rem; 
  height: 3.5rem; 
  border-radius: 0px;
  background-color: black; 
  box-shadow: none;
}

.btn-date-picker {
  display: none;
}

.info-date-media {
  display: none;
}

// smartphones retrato 375 paisagem 480
// tablets     retrato 768 paisagem 960
// desktop     min-width 960

@media screen and (max-width: 375px) {
  .content {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
  }
  .col-l {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
    padding: 8px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: black;
  }
  .ttl {
    position: relative;
    font-family: 'Monoton';
    font-size: 2em;
    margin-bottom: 0px;
    color: white;
  }
  .subtitle {
    position: relative;
    font-size: 1em;
    color: white;
  }
  .btn-back {
    display: none !important;
  }
  .col-r {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    position: absolute;
    right: 0px;
    top: 80px;
    padding: 8px;
    background-color: #5dfb5d;
  }
  .btn-date-picker {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 90%; 
    left: 90%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: black; 
    box-shadow: none;
  }
  .date {
    display: none;
  }
  .date-media {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
    width: 300px;
  }
  .info-date-media {
    display: block;
    font-size: 2em;
    z-index: 1;
  }
  .col-m {
    display: none;
  }
}

</style>
