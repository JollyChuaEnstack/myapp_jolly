<template>
    <v-app class="tw-mt-[25px] tw-mx-5"
    >
      <v-app-bar>
        <div class=" tw-flex tw-items-center tw-gap-4 tw-mx-5">
          <NuxtLink to="/" @click="form='table'">Home</NuxtLink>
          <span @click="page='table'">Table</span>
        </div>
      </v-app-bar>
      <v-main v-if="page==='table'">
        <v-container >
          <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Employees' Page</h1>
          <table class="table tw-justify-center">
            <thead id="MainList">
                <tr>
                  <th scope="col" class="tw-p-1">ID Picture</th>
                  <th scope="col" class="tw-p-1">Employee Number</th>
                  <th scope="col" class="tw-p-1">First Name</th>
                  <th scope="col" class="tw-p-1">Last Name</th>
                  <th scope="col" class="tw-p-1">Position</th>
                  <th scope="col" class="tw-p-1">Age</th>
                  <th scope="col" class="tw-p-1">Gender</th>
                  <th scope="col" class="tw-p-1">Update</th>
                  <th scope="col" class="tw-p-1">Delete</th>
                </tr>
            </thead>
            <tbody v-for="index in people" v-bind:key="index" class="tw-p-2">
              <tr class="tw-p-2">
                <td scope="row" class="tw-p-1">
                  <div class="tw-rounded-full">
                    <img :src="index.photo_link" class="tw-rounded-full tw-relative tw-w-14 tw-h-14 tw-object-cover"/>
                  </div>
                </td>
                <th scope="row" class=" tw-p-1 tw-text-based">{{ index.id_number }}</th>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.first_name }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.last_name }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.job }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.age }}</td>
                <td scope="row" class=" tw-p-1 tw-text-based">{{ index.gender }}</td>
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
        <div class="tw-flex tw-fex-row tw-w-full tw-px-[48px]">
          <div class="tw-flex tw-fex-col tw-w-full">
            <div class="tw-flex tw-flex-col">
              <h1 class=" tw-text-2xl tw-text-green-500 tw-font-bold">Employee Form</h1>
              <h1 class=" tw-text-lg tw-text-green-500 tw-font-bold">About Employee: {{ form.id_number }}</h1>
            </div>
            <div @click="editForm(index)" class="tw-text-center tw-p-1 tw-flex tw-justify-end tw-w-12">
              <div 
                class="tw-rounded-md tw-h-[35px] tw-p-1 tw-flex tw-align-center tw-justify-center"
                :class="isReadOnly? 'tw-bg-green-400' : 'tw-bg-blue-400'"
                ><h5>Edit</h5>
              </div>
            </div>
          </div>
          <div class="tw-flex">
              <div class="tw-flex tw-flex-col">
                <h4 class="tw-text-green-600">Motto in life:   </h4>
                <h4>"    {{ form.motto }}" </h4>
            </div>
           </div>
          <div>
            <div class="tw-rounded-full">
              <img :src="form.photo_link" class="tw-rounded-md tw-relative tw-h-24 tw-w-24 tw-object-cover tw-mx-1 "/>
            </div>
          </div>
        </div>          
        <v-container class="tw-border tw-rounded-xl tw-bg-green-100">
          <v-form v-model="valid">
            <v-container class="tw-w-full">
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.first_name"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
                <v-text-field
                  v-model="form.last_name"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>
              
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.gender"
                  :rules="emailRules"
                  label="Gender"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
                <v-text-field
                  v-model="form.age"
                  :rules="emailRules"
                  label="Age"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>

              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.job"
                  :rules="emailRules"
                  label="Job Title"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
                <v-text-field
                  v-model="form.language"
                  :rules="emailRules"
                  label="Programming Language Expertise"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>

              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.job_description"
                  :rules="emailRules"
                  label="Job Description"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>
              <div class="tw-flex tw-w-full">
                <v-text-field
                  v-model="form.dream_career"
                  :rules="emailRules"
                  label="Dream Career for the next five years"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>
              <div class="tw-flex tw-w-full md:tw-hidden">
                <v-text-field
                  v-model="form.university"
                  :rules="emailRules"
                  label="School Attended"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>
              <div class="tw-flex tw-w-full md:tw-hidden">
                <v-text-field
                  v-model="form.course_taken"
                  :rules="emailRules"
                  label="Course Taken"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>

              <div class="tw-hidden md:tw-flex tw-w-full">
                <v-text-field
                  v-model="form.university"
                  :rules="emailRules"
                  label="School Attended"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
                <v-text-field
                  v-model="form.course_taken"
                  :rules="emailRules"
                  label="Course Taken"
                  :readonly="isReadOnly"
                  required
                ></v-text-field>
                <span v-if="isReadOnly">🔒</span>
              </div>
            
            </v-container>
          </v-form>
          <div @click="save()" class="tw-text-center tw-py-2 tw-px-1 tw-bg-blue-400 tw-rounded-md">
            Save
          </div>
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
            photo_link: "https://www.pngitem.com/pimgs/m/264-2640465_passport-size-photo-sample-hd-png-download.png",
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
            photo_link: "https://media.istockphoto.com/id/856599656/photo/passport-picture-of-a-smiling-turkish-businesswoman.jpg?s=612x612&w=0&k=20&c=dgETy-9neViQs7SATDTOOa80QOhVFcLIomBFRxWVN_8=",
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
            photo_link: "https://www.shutterstock.com/image-photo/man-poses-passport-photo-260nw-207377266.jpg",
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
            photo_link: "https://media.istockphoto.com/id/515630181/photo/portrait-of-a-smiling-woman-in-a-blue-shirt.jpg?s=612x612&w=0&k=20&c=NbRbAUPtralJJkkWpTxmFnyb_0x241dpbMd4pRjGe84=",
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
            photo_link:"https://visafoto.com/img/chinese-e-passport-photo-example.jpg",
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
            photo_link: "https://media.istockphoto.com/id/515596766/photo/official-portrait-of-a-blonde-woman.jpg?s=612x612&w=0&k=20&c=yDY2nH6SNtfvn4c_BOuuZ27ZkENFevgvYxZD2Plk_vo=",
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
          phot0_link: "",
          motto: "",
          age: 0,
          job: "",
          language: "",
          job_description: "",
          gender: "",
          university: "",
          course_taken: "",
          dream_career: ""
        },
        editedIndex: 0
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
      editForm() {
        const number = this.people.findIndex(obj => obj.id_number === this.form.id_number);
        console.log(number)
        this.editedIndex = number
        this.isReadOnly = false
      },
      save() {
        this.people[this.editedIndex].first_name = this.form.first_name
        this.people[this.editedIndex].last_name = this.form.last_name
        this.people[this.editedIndex].motto = this.form.motto
        this.people[this.editedIndex].age = this.form.age
        this.people[this.editedIndex].job = this.form.job
        this.people[this.editedIndex].language = this.form.language
        this.people[this.editedIndex].job_description = this.form.job_description
        this.people[this.editedIndex].gender = this.form.gender
        this.people[this.editedIndex].university = this.form.university
        this.people[this.editedIndex].course_taken = this.form.course_taken
        this.people[this.editedIndex].dream_career = this.form.dream_career
        this.isReadOnly = true
        this.page = 'table'
      }
    },
    computed: {
      count(): number {
        return this.$store.state.count
      },
    }  
  }
</script>