---
layout: default
title: "Favoriete denkers"
page_type: article
parent_folder: ideas
show_submenu: true
speech: denkers
---


<!--<div class="main-txt" style="margin-bottom:0px;">  
    <p>
        Er zijn wetenschappers en denkers die ik tegenkom op YouTube en wiens ideeën ik interessant vind. Hieronder noem ik er een aantal. Lees meer via … ▼
    </p>
</div>-->

<section class="thinker">
        <button class="thinker-button" type="button" aria-expanded="false">
            <span>
                <span class="name">Michael Levin</span>
                <span class="teaser">Over intelligence, biology and the strange things living systems can do.</span>
            </span>
            <span class="arrow">▼</span>
        </button>

<div class="expand">
            <p>
                Levin studies how cells and organisms solve problems and how
                biological systems can display surprisingly sophisticated forms
                of goal-directed behaviour.
            </p>
            <p>
                What I find especially interesting is the possibility that
                intelligence may exist at several levels of biological
                organisation, rather than being something that suddenly appears
                only in a brain.
            </p>


</div>
</section>

<section class="thinker">
        <button class="thinker-button" type="button" aria-expanded="false">
            <span>
                <span class="name">Karl Friston</span>
                <span class="teaser">A rather different way of thinking about brains.</span>
            </span>
            <span class="arrow">▼</span>
        </button>

<div class="expand">
            <p>
                This one could contain a short introduction followed by whatever
                material you happen to find worth keeping.
            </p>


</div>
</section>

<section class="thinker">
        <button class="thinker-button" type="button" aria-expanded="false">
            <span>
                <span class="name">Karly Carly Friston</span>
                <span class="teaser">Nog wat meer.</span>
            </span>
            <span class="arrow">▼</span>
        </button>

<div class="expand">
            <p>
                This one could contain a short introduction followed by whatever
                material you happen to find worth keeping.
            </p>
            <p>
                And this section doesn't have to look exactly like the one above.
            </p>

</div>
</section>



<script>
    document.querySelectorAll(".thinker").forEach(function (thinker) {
        const button = thinker.querySelector(".thinker-button");
        const content = thinker.querySelector(".expand");
        const arrow = thinker.querySelector(".arrow");

        function toggle() {
            const isOpen = content.classList.toggle("open");
            button.setAttribute("aria-expanded", isOpen);
            arrow.textContent = isOpen ? "▲" : "▼";
        }

        button.addEventListener("click", toggle);
    });
</script>



 
