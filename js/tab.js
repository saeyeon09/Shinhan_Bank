
        document.addEventListener("DOMContentLoaded", function () {
            const tabBtn = document.querySelectorAll(".news>h2>a");
            const tabCont = document.querySelectorAll(".news>.notice>ul");

            tabCont.forEach(el => el.style.display = "none");
            tabCont[0].style.display = "block";

            tabBtn.forEach((tab, Index) => {
                tab.addEventListener("click", () => {

                    tabBtn.forEach(btn => btn.classList.remove("n_on"));
                    tabBtn[Index].classList.add("n_on");

                    tabCont.forEach(cont => cont.style.display = "none");
                    tabCont[Index].style.display = "block";
                });
            });
        });