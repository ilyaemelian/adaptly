(function () {
  var apiBase = new URLSearchParams(window.location.search).get("api") || "http://127.0.0.1:8000";

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function render(data) {
    var lesson = data.next_lessons[0];
    setText("learnerName", data.learner.name);
    setText("learnerTrack", data.learner.path + " · streak " + data.learner.streak + " days");
    setText("mastery", data.mastery.overall + "%");
    setText("lessonTitle", lesson.title);
    setText("lessonMeta", lesson.summary + " · " + lesson.minutes + " min");
    setText("mentorHint", data.mentor_hint);
    setText("apiStatus", "API connected");
    document.getElementById("masteryBar").style.width = data.mastery.overall + "%";
  }

  function loadDashboard() {
    return fetch(apiBase + "/api/demo-state")
      .then(function (response) { return response.json(); })
      .then(render);
  }

  function completeLesson() {
    var button = document.getElementById("completeLesson");
    button.disabled = true;
    fetch(apiBase + "/api/progress", { method: "POST" })
      .then(function (response) { return response.json(); })
      .then(render)
      .finally(function () { button.disabled = false; });
  }

  loadDashboard().catch(function () {
    setText("apiStatus", "API unavailable");
    setText("mentorHint", "Запустите backend: python3 apps/backend/server.py");
  });

  document.getElementById("completeLesson").addEventListener("click", completeLesson);
})();
