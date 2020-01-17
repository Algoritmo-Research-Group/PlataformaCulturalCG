<template>
  <div class="content">
    <div class="header">
      <span class="title">Agenda Cultural</span>
    </div>
    <div class="col-l">
      <q-btn class="btn-up" flat round icon="keyboard_arrow_up" size="1.4em"/>
      <div class="column events">
        <!-- days here, implement with api calendar-->
        <span class="select-day" style="font-family: 'Courier new'">04</span>
        <span class="select-day" style="font-family: 'Courier new'">05</span>
        <span class="select-day" style="font-family: 'Courier new'">06</span>
        <span class="select-day" style="font-family: 'Courier new'">07</span>
        <span class="select-day" style="font-family: 'Courier new'">08</span>
        <span class="select-day" style="font-family: 'Courier new'">09</span>
        <span class="select-day" style="font-family: 'Courier new'">10</span>
      </div>
      <q-btn class="btn-down" flat round icon="keyboard_arrow_down" size="1.4em"/>
    </div>

    <div class="col-m column">
      <div class="calendarHeader">
        <span class="day-info" style="font-family: 'Courier new'"> <strong> {{ dayWeek }} </strong> {{ formated_date }} </span>
      </div>
      <div class="calendarWeek row">
        <div class="column week-days">
          <span class="title-week-days" style="font-family: 'Courier new'">Dom</span>
        </div>
        <span class="week-days" style="font-family: 'Courier new'">Seg</span>
        <span class="week-days" style="font-family: 'Courier new'">Ter</span>
        <span class="week-days" style="font-family: 'Courier new'">Qua</span>
        <span class="week-days" style="font-family: 'Courier new'">Qui</span>
        <span class="week-days" style="font-family: 'Courier new'">Sex</span>        
        <span class="week-days" style="font-family: 'Courier new'">Sab</span>
      </div>
    </div>

    <div class="col-r"> 
      <span class="info-date-media"> <strong> {{ formated_date }} </strong></span>
      <q-date 
        class="date-picker"
        minimal
        v-model="date"
        :locale="myLocale"
        :events="events"
        :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
        today-btn
        default-year-month="2020/01"
        flat
        color="yellow"
        text-color="black"
      ></q-date>
    </div>

    <div class="section">
      <q-btn round class="btn-date-picker" @click="pickDate=!pickDate">
        <div class="row" style="justify-content: center; align-items: center;">
          <q-icon name="fas fa-calendar-week" class="text-white" size="1.5em"></q-icon>
        </div> 
      </q-btn>
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data() {
    return {
      userName: 'fulano de tal',
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
      },
      dayWeek: 'Segunda',
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
  display: grid;
  margin: 0 auto;
  grid-gap: 10px;
  grid-template-columns: 100px 2fr 2fr 1fr;
  grid-template-rows: 100px 2fr 2fr 150px;
}

.header {
  background-color: white;
  grid-area: 1 / 1 / 2 / 5;
  z-index: 1;
}

.title {
  font-size: 5.5em;
  font-family: 'Monoton', 'Courier New', Courier, monospace;
  text-transform: uppercase;
  color: black;
  letter-spacing: 6px;
  align-self: center;
  margin-left: 32px;
}

.col-l {
  grid-area: 2 / 1 / 5 / 2;
  // display: flex;
  // flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px;
  // background-color: #248eff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.btn-up {
  position: absolute;
  top: 8px;
  align-self: center; 
  box-shadow: none;
  z-index: 1;
}

.events {
  // border: 2px solid red;
  width: 100%;
  height: 70%;
  position: absolute;
  align-items: center;
  justify-content: space-around;

  .select-day {
    
    &:hover {
      background-color: black;
      height: 30px;
      width: 30px;
      color: white;
      border-radius: 25px;
      text-align: center;
      font-weight: 900;
      cursor: pointer;
    }
  }
}

.btn-down {
  position: absolute;
  bottom: 8px;
  align-self: center; 
  box-shadow: none;
  z-index: 1;
}

.userName {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  margin-top: 8px;
}

// -------------------middle------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
.col-m {
  grid-area: 2 / 2 / 5 / 4;
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: aqua;
}

.calendarHeader {
  width: 100%;

  .day-info {
    font-size: 2em;
    margin-left: 52px;
    color: white;
    font-weight: 700;
  }
}

.calendarWeek {

  .week-days {
    border: 2px solid red;
    height: 100%;
    flex-basis: fill;

    .title-week-days {
    font-size: 1.3em;
    font-weight: 400;

  }
  }
}

.calendarWeek {
  width: 100%;
  justify-content: space-around;
}

// -------------------left------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
.col-r {
  grid-area: 2 / 4 / 4 / 5;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: #fbec5d;
  border-radius: 0px;
}

.info-date-media {
  align-self: center;
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
}

.date-picker {
  margin-top: 8px;
}

.section {
  grid-area: 4 / 4 / 5 / 5;
  background-image: none;
  background-color: white;
}

.btn-date-picker {
  display: none;
}

// smartphones retrato 375 paisagem 480
// tablets     retrato 768 paisagem 960
// desktop     min-width 960
@media screen and (max-width: 375px) {

  .content {
    height: 100vh;
    width: 100%;
    background-image: none;
    display: grid;
    margin: 0 auto;
    grid-gap: 10px;
    grid-template-columns: 1fr 2fr 2fr 100px;
    grid-template-rows: 50px 60px auto 100px;
  }

  .header {
    background-color: white;
    grid-area: 1 / 1 / 2 / 5;
    text-align: center;
  }

  .title {
    font-size: 1.8em;
    align-self: center;
    font-family: 'Monoton';
    letter-spacing: 0.2em;
  }

  .col-l {
    grid-area: 2 / 1 / 3 / 5;
    // display: flex;
    // flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: #248eff;
  }

  .col-m {
    grid-area: 3 / 1 / 4 / 5;
    box-sizing: border-box;
    // display: flex;
    // flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: aqua;
  }

  .col-r {
    grid-area: 4 / 1 / 5 / 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: #fbec5d;
  }

  .section {
    grid-area: 4 / 4 / 5 / 5;
    background-image: none;
    background-color: #7422;
    position: relative;
  }

  .btn-date-picker {
    display: block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 2;
    background-color: black; 
    box-shadow: none;
  }
  
}
</style>
