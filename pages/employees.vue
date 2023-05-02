<template>
    <v-app class="tw-mt-[60px] tw-mx-5">
      <v-app-bar>
        <div class=" tw-flex tw-items-center tw-gap-4 tw-mx-5">
          <NuxtLink to="/" @click="form='table'">Home</NuxtLink>
          <!-- <NuxtLink to="/employees" @click="form='table'">Table</NuxtLink> -->
        </div>
      </v-app-bar>
      <!-- <span @click="increment()">Test</span> -->
      <v-main v-if="page==='table'">
        <v-container >
          <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Employees' Page</h1>
          <table class="table tw-p-">
            <thead id="MainList">
                <tr>
                  <th scope="col" class="tw-p-1">Employee Number</th>
                  <th scope="col" class="tw-p-1">First Name</th>
                  <th scope="col" class="tw-p-1">Last Name</th>
                  <th scope="col" class="tw-p-1">Position</th>
                  <th scope="col" class="tw-p-1">Update</th>
                  <th scope="col" class="tw-p-1">Delete</th>
                </tr>
            </thead>
            <tbody v-for="index in people" v-bind:key="index" class="tw-p-2">
              <tr class="tw-p-2">
                <th scope="row" class=" tw-p-1 tw-text-based">{{ index.id_number }}</th>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.first_name }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.last_name }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.job }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">
                  <div @click="viewForm(index)" class="tw-text-center tw-p-1 tw-bg-blue-400 tw-rounded-md">
                    <h5>View</h5>
                  </div>
                </td>
                <td >
                  <div @click="deleteEmployee(index)" class="tw-text-center tw-p-1 tw-bg-red-400 tw-rounded-md">
                    <h5>Delete</h5>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </v-container>
      </v-main>
      <v-main v-if="page==='form'">
          <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Employee Form</h1>
          <h1 class=" tw-text-lg tw-text-green-500 tw-font-bold">About Employee: {{ form.id_number }}</h1>
        <v-container>
          <v-form v-model="valid">
            <v-container class="tw-bg-green-200 tw-w-full">
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.first_name"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.last_name"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>
              
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.gender"
                  :rules="emailRules"
                  label="Gender"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.age"
                  :rules="emailRules"
                  label="Age"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>

              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.job"
                  :rules="emailRules"
                  label="Job Title"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.language"
                  :rules="emailRules"
                  label="Programming Language Expertise"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>

              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.job_description"
                  :rules="emailRules"
                  label="Job Description"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.dream_career"
                  :rules="emailRules"
                  label="Dream Career for the next five years"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.university"
                  :rules="emailRules"
                  label="School Attended"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.course_taken"
                  :rules="emailRules"
                  label="Course Taken"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
              </div>
            
            </v-container>
          </v-form>
        </v-container>
         
      </v-main>
    </v-app>
  </template>

<script lang="ts">

  export default {
    data() {
      return {
        isReadOnly: true,
        page: 'table',
        people: [
          {
            id_number: "2023-1",
            first_name: "Juan",
            last_name: "Dela Cruz",
            motto: "Hindi susuko sa mga hamon ng buhay.",
            age: 25,
            job: "Software Developer",
            language: "Python",
            job_description: "Develops software applications for clients.",
            gender: "Male",
            university: "University of the Philippines",
            course_taken: "Computer Science",
            dream_career: "To become a project manager in a software development company."
          },
          {
            id_number: "2023-2",
            first_name: "Maria Santos",
            last_name: "Santos",
            motto: "Ang pag-ibig ang siyang magliligtas sa atin sa lahat ng kaguluhan.",
            age: 28,
            job: "Data Analyst",
            language: "R",
            job_description: "Analyzes data and provides insights to clients.",
            gender: "Female",
            university: "De La Salle University",
            course_taken: "Statistics",
            dream_career: "To become a data science manager in a multinational corporation."
          },
          {
            id_number: "2023-3",
            first_name: "Pedro",
            last_name: "Gonzales",
            motto: "Magtiwala sa sarili at sa kakayahan.",
            age: 30,
            job: "IT Manager",
            language: "Java",
            job_description: "Manages the IT department of a company.",
            gender: "Male",
            university: "Ateneo de Manila University",
            course_taken: "Information Technology",
            dream_career: "To become a CIO of a multinational corporation."
          },
          {
            id_number: "2023-4",
            first_name: "Cristina",
            last_name: "Reyes",
            motto: "Bawat tagumpay ay nangangailangan ng sakripisyo.",
            age: 27,
            job: "Web Developer",
            language: "JavaScript",
            job_description: "Develops web applications for clients.",
            gender: "Female",
            university: "University of Santo Tomas",
            course_taken: "Information Technology",
            dream_career: "To become a frontend development team lead in a software development company."
          },
          {
            id_number: "2023-5",
            first_name: "Jose",
            last_name: "Garcia",
            motto: "Walang imposible sa taong may tiyaga at determinasyon.",
            age: 29,
            job: "Database Administrator",
            language: "SQL",
            job_description: "Manages databases for clients.",
            gender: "Male",
            university: "Mapua University",
            course_taken: "Computer Engineering",
            dream_career: "To become a senior database architect in a multinational corporation."
          },
          {
            id_number: "2023-6",
            first_name: "Luzviminda",
            last_name: "Cruz",
            motto: "Magpakatatag sa gitna ng anumang unos.",
            age: 26,
            job: "Mobile App Developer",
            language: "Swift",
            job_description: "Develops mobile applications for clients.",
            gender: "Female",
            university: "Technological Institute of the Philippines",
            course_taken: "Computer Science",
            dream_career: "To become an iOS development team lead in a multinational company"
          }
        ],
        form: {
          id_number: "",
          first_name: "",
          last_name: "",
          motto: "",
          age: null,
          job: "",
          language: "",
          job_description: "",
          gender: "",
          university: "",
          course_taken: "",
          dream_career: ""
        }
      }
    },
    components: {
    },
    mounted() {
    },
    methods: {
      viewForm(index) {
        this.page = 'form'
        this.$forceUpdate();
        this.form = {...index }
        //this.$router.push({ path: `/employee/${index.id_number}`})
      },
      deleteEmployee(index) {
        const indexReal = (data) => data.id_number === index.id_number
        this.people.splice(this.people.findIndex(indexReal), 1)
        this.$forceUpdate();
      },
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    },
    computed: {
      count(): number {
        return this.$store.state.count
      },
    }  
  }
</script>