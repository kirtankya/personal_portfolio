
import '../src/styles/main.scss';
import Main from './about';
import Project from './project';
import service from './service';
import Work from './work';
import work from './service_work';
import blog from './blog';
import Blog_detail from './blog_detail';



// import logo from './assets/logo/Logo.png';



// const logoItem = document.getElementById('logoItem');
// logoItem.src = logo;
// tab();

function BackToTop() {
    // Back to top
    var amountScrolled = 200;
    var amountScrolledNav = 25;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > amountScrolled) {
            document.querySelector('button.back-to-top').classList.add('show');
        } else {
            document.querySelector('button.back-to-top').classList.remove('show');
        }
    });

    document.querySelector('button.back-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

BackToTop();

function loading() {
    var loadingWrapper = document.getElementById("loading-wrapper");
    var wrapper = document.getElementById("wrapper");
    if (loadingWrapper && wrapper) {
        setTimeout(function () {
            loadingWrapper.classList.add("hidden");
            wrapper.classList.remove("hidden");
        }, 2000);
    } else {
        console.error("One or both of the elements not found.");
    }
}

loading();







console.log(Main())
console.log(Project());
console.log(Work());
console.log(service());
console.log(work());
console.log(blog());
console.log(Blog_detail());
