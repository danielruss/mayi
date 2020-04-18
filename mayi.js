const rounds = ["3+3", "3+4", "4+4", "3+3+3", "3+3+4", "3+4+4", "4+4+4"];

scoreChange = function (event) {
  let id = event.target.id;
  let prefix = id.substring(0, 5);
  let sumId = id.replace(/row.$/, "rowsum");

  score = rounds
    .map((x, indx) => {
      rid = prefix + (indx + 1);
      return parseInt(document.getElementById(rid).value) || 0;
    })
    .reduce((total, current) => {
      return total + current;
    });
  document.getElementById(sumId).innerHTML = score;
};

window.onload = function () {
  console.log("in w.onload");

  let th = '<tr><td class="title" colspan="5">May I</td></tr>';

  let tr = rounds
    .map((x, indx) => {
      return `<tr><td class="round">${x}</td><td><input type="number" class="score" id="p1row${
        indx + 1
      }"/></td><td><input type="number" class="score" id="p2row${indx + 1}"/></td><td><input type="number" class="score" id="p3row${
        indx + 1
      }"/></td><td><input type="number" class="score" id="p4row${indx + 1}"/></td></tr>`;
    })
    .reduce((x, y) => {
      return x + y;
    });

  let sumr = `<tr><td class="round">sum</td><td class="score"><span id="p1rowsum"  ></span></td><td class="score" ><span id="p2rowsum" ></span></td><td class="score"><span id="p3rowsum"  ></span></td><td class="score" ><span id="p4rowsum" ></span></td></tr>`;
  document.getElementById("board").innerHTML = `<table>${th}${tr}${sumr}</table>`;

  for (p = 1; p <= 4; p++) {
    for (round = 1; round <= 7; round++) {
      let myelement = document.getElementById("p" + p + "row" + round);
      myelement.onchange = scoreChange;
      let event = {};
      event.target = myelement;
      scoreChange(event);
    }
  }
};
