let projects = []
const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]

function addBlog(event){
    event.preventDefault()

let nameProject = document.getElementById("input-project-name").value
let startDate = document.getElementById("input-project-start-date").value
let endDate = document.getElementById("input-project-end-date").value
let description = document.getElementById("message").value
let technologies = document.getElementById("nodeJS","reactJS", "nextJS","typeScript").value
let image = document.getElementById("input-project-image")
image = URL.createObjectURL(image.files[0])

let project = {
    nameProject : nameProject,
    startDate : startDate,
    endDate : endDate,
    technologies : technologies,
    description : description,
    image : image,
    postedAt : new Date()  
    }
    
    projects.push(project)
    console.table(projects)
    renderBlog()
}
function renderBlog(){
    
    let containerProject = document.getElementById("contents")
    //containerProject.innerHTML = firstBlogContent()

    for(let i = 0; i < projects.length; i++){
    containerProject.innerHTML +=`
    <div class="project-card-item">
      <div class="project-image">
        <img src="${projects[i].image}" alt="" />
      </div>
      <div class="project-content">
        <h1>
          <a href="myProject-detail.html" target="_blank">${projects[i].nameProject}</a>
        </h1>
        <div class="detail-project-content">
          ${projects[i].endDate} | Ichsan Emrald Alamsyah
        </div>
        <p>
          ${projects[i].description}
        </p>
        <img src="assetts/img/icon/node-js.png" alt=""/>
        <img src="assetts/img/icon/react-js.png" alt=""/>
        <img src="assetts/img/icon/typescript.png" alt=""/>
        <img src="assetts/img/icon/next-js.png" alt=""/>
        <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-post">Delete</button>
          </div>
        </div>
      </div> 
      `
    }

}

function getFullTime(time){

    console.log(time)

    const date = time.getDate()
    const monthIndex = time.getMonth()
    const year = time.getFullYear()

    const hour = time.getHours()
    const minute = time.getMinutes()

    console.log(date)
    console.log(month)
    console.log(year)
    console.log(hour)
    console.log(minute) 

    return`${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`
}

function getDistanceTime(time){
    console.log(time);
    const distance = new Date() - new Date(time)
    
    const miliseconds = 1000
    const secondInMinute = 60
    const minuteInHour = 60
    const secondInHour = secondInMinute * minuteInHour
    const hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)
    if (dayDistance >= 1) {
        const time = Math.floor(dayDistance) + ' hari lalu '
        return time
    }   else{
        let hourDistance = Math.floor (distance / (miliseconds * secondInHour))
        if(hourDistance > 0){
            return hourDistance + ' jam lalu '
    }   else{
        let minuteDistance = Math.floor (distance / (miliseconds * secondInMinute))
        return minuteDistance + ' menit lalu '
    }
    
}

function firstBlogContent(){
    return`
    <div class="project-card-item">
     <div class="project-image">
      <img src="assetts/img/JasonMomoa.jpg" alt="" />
    </div>
    <div class="project-content">
      <h1>
        <a href="myProject-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
      </h1>
      <div class="detail-project-content">
        12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
      </div>
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir.
      </p>
      <img src="assetts/img/icon/node-js.png" alt=""/>
      <img src="assetts/img/icon/react-js.png" alt=""/>
      <img src="assetts/img/icon/typescript.png" alt=""/>
      <img src="assetts/img/icon/next-js.png" alt=""/>
      <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
      </div>
    </div>
   `
}
}