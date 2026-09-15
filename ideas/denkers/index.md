---
layout: default
title: "Favoriete denkers"
page_type: article
parent_folder: ideas
show_submenu: true
---

<section class="expand-item">

    <button class="expand-trigger" type="button" aria-expanded="false">
        <span class="expand-heading">
            <span class="expand-title"><em>Michael</em> Levin</span>
            <span class="expand-teaser">Over intelligence, biology and the strange things living systems can do.</span>
        </span>
        <span class="expand-arrow">▼</span>
    </button>

    <div class="expand-content">
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


<section class="expand-item">

    <button class="expand-trigger" type="button" aria-expanded="false">
        <span class="expand-heading">
            <span class="expand-title"><em>Anil</em> Seth</span>
            <span class="expand-teaser">A rather different way of thinking about brains.</span>
        </span>
        <span class="expand-arrow">▼</span>
    </button>

    <div class="expand-content">
        <p>
            This one could contain a short introduction followed by whatever
            material you happen to find worth keeping.
        </p>
    </div>

</section>


<section class="expand-item">

    <button class="expand-trigger" type="button" aria-expanded="false">
        <span class="expand-heading">
            <span class="expand-title"><em>Alex</em> OʼConnor</span>
            <span class="expand-teaser">Nog wat meer.</span>
        </span>
        <span class="expand-arrow">▼</span>
    </button>

    <div class="expand-content">
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
document.querySelectorAll(".expand-item").forEach(function (item) {

    const trigger = item.querySelector(".expand-trigger");
    const content = item.querySelector(".expand-content");
    const arrow = item.querySelector(".expand-arrow");

    trigger.addEventListener("click", function () {

        const isOpen = content.classList.toggle("open");

        trigger.setAttribute("aria-expanded", isOpen);
        arrow.textContent = isOpen ? "▲" : "▼";

    });

});
</script>



 
