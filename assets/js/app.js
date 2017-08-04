let projects = [
    {
      projectName: "KeyDR",
      url: "https://keydr.herokuapp.com/",
      image: "https://media.giphy.com/media/WWvqs59KEyIEM/giphy.gif",
      description: "KeyDR is a musical game. User has to press the keys that match the notes coming down the screen."
    },
    {
      projectName: "Bayrails",
      url: "https://belle-vin-42587.herokuapp.com/",
      image: "images/bayrailsScreenShot.png",
      description: "A web app providing users with searchable Caltrain commuter rail schedules."
    },
    {
        projectName: "Swimming Turtle",
        url: "/projects/swimming_turtle/usingCSS.html",
        image: "https://media.giphy.com/media/1297wA9jS8FqVi/giphy.gif",
        description: "A swimming turtle made with pure CSS."
    },
    // {
    //     projectName: "Music Boxes",
    //     url: "/projects/music_boxes/index.html",
    //     image: "https://media.giphy.com/media/lZ8yyz4xUzwrK/giphy.gif",
    //     description: "Google coder music box project using jQuery, HTML5 Audio tags and CSS."
    // },
    // {
    //     projectName: "Horn Shark Page",
    //     url: "/projects/horn_sharks_responsive/index.html",
    //     image: "images/hornShark.png",
    //     description: "A responsive webpage about Horn Sharks."
    // },
    // {
    //     projectName: "Day and Night",
    //     url: "/projects/day_and_night/index.html",
    //     image: "images/dayAndNight.png",
    //     description: "Change day into night and back again with the click of a mouse. Made with jQuery."
    // },
    // {
    //     projectName: "Digital Clock",
    //     url: "/projects/digital_clock/index.html",
    //     image: "images/digitalClock.png",
    //     description: "A simple digital clock using basic Javascript."
    // },
    {
        projectName: "HOA Website",
        url: "https://fewd1-team10.github.io/",
        image: "images/hoaWebsite.png",
        description: "A re-design of my previous HOA's website."
    }
];



let subtitlesArr = document.querySelectorAll('h2.subtitle');
for (let i = 0; i < subtitlesArr.length; i++) {
    if (i !== subtitlesArr.length - 1) {
        subtitlesArr[i].classList.add('margin-right');
    }
}
function addProjects() {
    let $gallery = $('.gallery');
    projects.forEach(function(project, idx) {
        let $article = $('<article>');
        if (idx % 2 === 0) {
            $article.addClass('from-left');
        } else {
            $article.addClass('from-right');
        }
        let $a = $('<a>');
        $a.attr({
            class: "image fit",
            href: project.url,
            target: "_blank",
            style: "position: relative"
        });
        let $img = $('<img>');
        $img.attr({
            src: project.image,
            alt: project.projectName,
            title: project.projectName
        });
        let $div = $('<div>').addClass('projectDescription');
        let $h3 = $('<h3>');
        $h3.text(project.projectName);
        let $p = $('<p>').text(project.description);
        $div.append($h3).append($p);
        $a.append($img).append($div);
        $article.append($a);
        $gallery.append($article);
    }); // forEach ends.

}

window.onload = function(){
    addProjects();
}
