/* =====================================================
   FEEFINDER — script.js
   Full interactive search + filter logic
===================================================== */

/* ---------- DATA ---------- */
const ALL_INSTITUTIONS = [
  {
    id: 1, name: "Delhi Public School Bhubaneswar",
    type: "School", board: "CBSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 85000, rating: 4.7,
    facilities: ["Transport", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🏫"
  },
  {
    id: 2, name: "DAV Public School",
    type: "School", board: "CBSE", medium: "Hindi",
    city: "Cuttack", state: "Odisha",
    fee: 45000, rating: 4.2,
    facilities: ["Transport", "Science Lab", "Library"],
    icon: "🏫"
  },
  {
    id: 3, name: "Kendriya Vidyalaya Bhubaneswar",
    type: "School", board: "CBSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 12000, rating: 4.0,
    facilities: ["Sports", "Library", "Science Lab"],
    icon: "🏛️"
  },
  {
    id: 4, name: "St. Xavier's High School",
    type: "School", board: "ICSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 72000, rating: 4.8,
    facilities: ["Transport", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🏫"
  },
  {
    id: 5, name: "Nalanda Academy",
    type: "School", board: "State Board", medium: "Odia",
    city: "Puri", state: "Odisha",
    fee: 18000, rating: 3.8,
    facilities: ["Library", "Sports"],
    icon: "📚"
  },
  {
    id: 6, name: "Fiitjee World School",
    type: "School", board: "CBSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 130000, rating: 4.5,
    facilities: ["Science Lab", "Smart Class", "Library", "Transport"],
    icon: "🔬"
  },
  {
    id: 7, name: "ODM Public School",
    type: "School", board: "CBSE", medium: "Bilingual",
    city: "Bhubaneswar", state: "Odisha",
    fee: 60000, rating: 4.3,
    facilities: ["Hostel", "Transport", "Sports", "Library", "Science Lab"],
    icon: "🏫"
  },
  {
    id: 8, name: "Loyola School",
    type: "School", board: "ICSE", medium: "English",
    city: "Cuttack", state: "Odisha",
    fee: 55000, rating: 4.4,
    facilities: ["Sports", "Library", "Science Lab"],
    icon: "✝️"
  },
  {
    id: 9, name: "KIIT International School",
    type: "School", board: "IB", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 220000, rating: 4.9,
    facilities: ["Hostel", "Transport", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🌐"
  },
  {
    id: 10, name: "Maharishi International School",
    type: "School", board: "IGCSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 190000, rating: 4.6,
    facilities: ["Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🏫"
  },
  {
    id: 11, name: "Utkal University",
    type: "University", board: "State Board", medium: "Odia",
    city: "Bhubaneswar", state: "Odisha",
    fee: 15000, rating: 3.6,
    facilities: ["Library", "Science Lab", "Sports"],
    icon: "🎓"
  },
  {
    id: 12, name: "KIIT University",
    type: "University", board: "State Board", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 180000, rating: 4.5,
    facilities: ["Hostel", "Transport", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🏛️"
  },
  {
    id: 13, name: "BPUT – Rourkela",
    type: "University", board: "State Board", medium: "English",
    city: "Rourkela", state: "Odisha",
    fee: 55000, rating: 3.9,
    facilities: ["Hostel", "Library", "Science Lab", "Sports"],
    icon: "🎓"
  },
  {
    id: 14, name: "SOA University",
    type: "University", board: "State Board", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 90000, rating: 4.2,
    facilities: ["Hostel", "Transport", "Sports", "Library", "Science Lab"],
    icon: "🏛️"
  },
  {
    id: 15, name: "IIT Bhubaneswar",
    type: "University", board: "CBSE", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 100000, rating: 4.9,
    facilities: ["Hostel", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "🔭"
  },
  {
    id: 16, name: "Ravenshaw University",
    type: "University", board: "State Board", medium: "Odia",
    city: "Cuttack", state: "Odisha",
    fee: 20000, rating: 3.7,
    facilities: ["Library", "Sports"],
    icon: "🎓"
  },
  {
    id: 17, name: "Stewart Science College",
    type: "College", board: "State Board", medium: "English",
    city: "Cuttack", state: "Odisha",
    fee: 25000, rating: 3.9,
    facilities: ["Library", "Science Lab", "Sports"],
    icon: "🔬"
  },
  {
    id: 18, name: "BJB Autonomous College",
    type: "College", board: "State Board", medium: "Odia",
    city: "Bhubaneswar", state: "Odisha",
    fee: 18000, rating: 3.8,
    facilities: ["Library", "Sports"],
    icon: "📖"
  },
  {
    id: 19, name: "Rama Devi Women's College",
    type: "College", board: "State Board", medium: "Bilingual",
    city: "Bhubaneswar", state: "Odisha",
    fee: 16000, rating: 4.0,
    facilities: ["Library", "Smart Class"],
    icon: "🌸"
  },
  {
    id: 20, name: "Xavier's College of Education",
    type: "College", board: "State Board", medium: "English",
    city: "Bhubaneswar", state: "Odisha",
    fee: 42000, rating: 4.3,
    facilities: ["Library", "Science Lab", "Transport"],
    icon: "✝️"
  },
  {
    id: 21, name: "Khallikote Autonomous College",
    type: "College", board: "State Board", medium: "Odia",
    city: "Berhampur", state: "Odisha",
    fee: 14000, rating: 3.6,
    facilities: ["Library", "Sports"],
    icon: "📚"
  },
  {
    id: 22, name: "National Institute of Technology Rourkela",
    type: "University", board: "State Board", medium: "English",
    city: "Rourkela", state: "Odisha",
    fee: 120000, rating: 4.8,
    facilities: ["Hostel", "Sports", "Science Lab", "Library", "Smart Class"],
    icon: "⚙️"
  },
  {
    id: 23, name: "Fakir Mohan University",
    type: "University", board: "State Board", medium: "Odia",
    city: "Balasore", state: "Odisha",
    fee: 22000, rating: 3.5,
    facilities: ["Library", "Sports"],
    icon: "🎓"
  },
  {
    id: 24, name: "Sambalpur University",
    type: "University", board: "State Board", medium: "Bilingual",
    city: "Sambalpur", state: "Odisha",
    fee: 18000, rating: 3.6,
    facilities: ["Library", "Sports", "Hostel"],
    icon: "🏛️"
  }
];

/* ---------- STATE ---------- */
let state = {
  query: "",
  type: "All",
  board: "All",
  medium: "All",
  facilities: [],
  maxFee: 500000,
  minRating: 0,
  sort: "relevance",
  results: [...ALL_INSTITUTIONS],
  saved: new Set()
};

/* ---------- HELPERS ---------- */
function formatFee(fee) {
  if (fee >= 100000) {
    return "₹" + (fee / 100000).toFixed(1).replace(/\.0$/, "") + "L";
  }
  return "₹" + (fee / 1000).toFixed(0) + "K";
}

function typeBadgeClass(type) {
  if (type === "College") return "college";
  if (type === "University") return "university";
  return "";
}

function showToast(msg) {
  let toast = document.getElementById("ffToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ffToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function countActiveFilters() {
  let c = 0;
  if (state.type !== "All") c++;
  if (state.board !== "All") c++;
  if (state.medium !== "All") c++;
  if (state.facilities.length > 0) c += state.facilities.length;
  if (state.maxFee < 500000) c++;
  if (state.minRating > 0) c++;
  return c;
}

function updateFilterBadge() {
  const badge = document.getElementById("filterCountBadge");
  const count = countActiveFilters();
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

/* ---------- FILTER LOGIC ---------- */
function applyFilters() {
  let res = ALL_INSTITUTIONS.filter(inst => {
    // Query
    if (state.query) {
      const q = state.query.toLowerCase();
      const hit =
        inst.name.toLowerCase().includes(q) ||
        inst.city.toLowerCase().includes(q) ||
        inst.state.toLowerCase().includes(q) ||
        inst.type.toLowerCase().includes(q) ||
        inst.board.toLowerCase().includes(q);
      if (!hit) return false;
    }
    // Type
    if (state.type !== "All" && inst.type !== state.type) return false;
    // Board
    if (state.board !== "All" && inst.board !== state.board) return false;
    // Medium
    if (state.medium !== "All" && inst.medium !== state.medium) return false;
    // Facilities
    if (state.facilities.length > 0) {
      const ok = state.facilities.every(f => inst.facilities.includes(f));
      if (!ok) return false;
    }
    // Fee
    if (inst.fee > state.maxFee) return false;
    // Rating
    if (inst.rating < state.minRating) return false;
    return true;
  });

  // Sort
  if (state.sort === "fee-asc") res.sort((a, b) => a.fee - b.fee);
  else if (state.sort === "fee-desc") res.sort((a, b) => b.fee - a.fee);
  else if (state.sort === "rating") res.sort((a, b) => b.rating - a.rating);
  else if (state.sort === "name") res.sort((a, b) => a.name.localeCompare(b.name));

  state.results = res;
}

/* ---------- RENDER CARDS ---------- */
function renderCards() {
  const grid = document.getElementById("cardsGrid");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultsCount");

  countEl.textContent = `Showing ${state.results.length} institution${state.results.length !== 1 ? "s" : ""}`;

  if (state.results.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = state.results.map(inst => {
    const visibleFac = inst.facilities.slice(0, 3);
    const extraFac = inst.facilities.length - 3;
    const isSaved = state.saved.has(inst.id);
    return `
      <div class="inst-card" data-id="${inst.id}">
        <div class="card-top">
          <div class="card-icon">${inst.icon}</div>
          <span class="card-type-badge ${typeBadgeClass(inst.type)}">${inst.type}</span>
        </div>

        <button
          class="card-save-btn ${isSaved ? "saved" : ""}"
          data-id="${inst.id}"
          title="${isSaved ? "Remove from saved" : "Save"}"
          aria-label="Save"
        >${isSaved ? "❤️" : "🤍"}</button>

        <div>
          <div class="card-name">${inst.name}</div>
          <div class="card-location">📍 ${inst.city}, ${inst.state}</div>
        </div>

        <div class="card-meta-row">
          <div class="card-board-medium">${inst.board} · ${inst.medium} Medium</div>
          <div class="card-rating">
            <span class="star-icon">★</span>
            ${inst.rating.toFixed(1)}
          </div>
        </div>

        <div class="card-fee-row">
          <span class="card-fee">${formatFee(inst.fee)}</span>
          <span class="card-fee-per">/ yr</span>
        </div>

        <div class="card-facilities">
          ${visibleFac.map(f => `<span class="fac-tag">${f}</span>`).join("")}
          ${extraFac > 0 ? `<span class="fac-more">+${extraFac}</span>` : ""}
        </div>
      </div>
    `;
  }).join("");

  // Save button events
  grid.querySelectorAll(".card-save-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      if (state.saved.has(id)) {
        state.saved.delete(id);
        showToast("💔 Removed from Saved");
      } else {
        state.saved.add(id);
        showToast("❤️ Saved to your list!");
      }
      renderCards();
    });
  });

  // Card click
  grid.querySelectorAll(".inst-card").forEach(card => {
    card.addEventListener("click", () => {
      const inst = ALL_INSTITUTIONS.find(i => i.id === parseInt(card.dataset.id));
      if (inst) showToast(`📋 Viewing: ${inst.name}`);
    });
  });
}

/* ---------- SEARCH & REFRESH ---------- */
function refresh() {
  applyFilters();
  renderCards();
  updateFilterBadge();
}

/* ---------- SUGGESTIONS ---------- */
function buildSuggestions(query) {
  const box = document.getElementById("suggestionsBox");
  if (!query || query.length < 2) { box.classList.remove("open"); return; }

  const q = query.toLowerCase();
  const matches = ALL_INSTITUTIONS
    .filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.city.toLowerCase().includes(q) ||
      i.type.toLowerCase().includes(q)
    )
    .slice(0, 6);

  if (!matches.length) { box.classList.remove("open"); return; }

  box.innerHTML = matches.map(m => `
    <div class="suggestion-item" data-name="${m.name}">
      <span class="si-icon">${m.icon}</span>
      <div>
        <div class="si-name">${m.name}</div>
        <div class="si-sub">${m.type} · ${m.city}</div>
      </div>
    </div>
  `).join("");

  box.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("searchInput").value = item.dataset.name;
      state.query = item.dataset.name;
      box.classList.remove("open");
      refresh();
    });
  });

  box.classList.add("open");
}

/* ---------- PILL GROUP INIT ---------- */
function initPillGroup(groupId, onChange) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      group.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      onChange(pill.dataset.value);
    });
  });
}

function initFacilityPills() {
  const group = document.getElementById("facilitiesGroup");
  group.querySelectorAll(".fac-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const val = pill.dataset.value;
      if (pill.classList.contains("active")) {
        pill.classList.remove("active");
        state.facilities = state.facilities.filter(f => f !== val);
      } else {
        pill.classList.add("active");
        state.facilities.push(val);
      }
      refresh();
    });
  });
}

/* ---------- STAR RATING ---------- */
function initStars() {
  const stars = document.querySelectorAll(".star");
  const anyLabel = document.getElementById("anyRating");

  function renderStars(active) {
    stars.forEach(s => {
      s.classList.toggle("active", parseInt(s.dataset.value) <= active);
    });
    anyLabel.style.display = active === 0 ? "inline" : "none";
  }

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = parseInt(star.dataset.value);
      if (state.minRating === val) {
        state.minRating = 0;
        renderStars(0);
      } else {
        state.minRating = val;
        renderStars(val);
      }
      refresh();
    });

    star.addEventListener("mouseenter", () => {
      stars.forEach(s => s.classList.toggle("active", parseInt(s.dataset.value) <= parseInt(star.dataset.value)));
    });

    star.addEventListener("mouseleave", () => renderStars(state.minRating));
  });

  renderStars(0);
}

/* ---------- FEE RANGE ---------- */
function initFeeRange() {
  const slider = document.getElementById("feeRange");
  const display = document.getElementById("feeDisplay");

  function updateDisplay(val) {
    const v = parseInt(val);
    const formatted = v >= 500000
      ? "₹5,00,000+"
      : "₹" + v.toLocaleString("en-IN");
    display.textContent = `₹0 – ${formatted}`;

    // Update gradient fill
    const pct = ((v - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--sky) ${pct}%, var(--border) ${pct}%)`;
  }

  slider.addEventListener("input", () => {
    state.maxFee = parseInt(slider.value);
    updateDisplay(slider.value);
    refresh();
  });

  updateDisplay(slider.value);
}

/* ---------- FILTER TOGGLE ---------- */
function initFilterToggle() {
  const btn = document.getElementById("filterToggleBtn");
  const section = document.getElementById("filterSection");
  let visible = true;

  btn.addEventListener("click", () => {
    visible = !visible;
    section.style.display = visible ? "block" : "none";
    btn.style.borderColor = visible ? "var(--sky)" : "";
    btn.style.color = visible ? "var(--sky)" : "";
  });
}

/* ---------- RESET ---------- */
function initReset() {
  document.getElementById("resetBtn").addEventListener("click", () => {
    // Reset state
    state.type = "All";
    state.board = "All";
    state.medium = "All";
    state.facilities = [];
    state.maxFee = 500000;
    state.minRating = 0;

    // Reset pills
    ["typeGroup", "boardGroup", "mediumGroup"].forEach(gId => {
      const g = document.getElementById(gId);
      g.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      const first = g.querySelector(".pill");
      if (first) first.classList.add("active");
    });

    // Facility pills off
    document.getElementById("facilitiesGroup")
      .querySelectorAll(".fac-pill")
      .forEach(p => p.classList.remove("active"));

    // Fee
    document.getElementById("feeRange").value = 500000;
    document.getElementById("feeDisplay").textContent = "₹0 – ₹5,00,000+";
    document.getElementById("feeRange").style.background =
      "linear-gradient(to right, var(--sky) 100%, var(--border) 100%)";

    // Stars
    document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
    document.getElementById("anyRating").style.display = "inline";

    showToast("✅ All filters reset!");
    refresh();
  });
}

/* ---------- SORT ---------- */
function initSort() {
  document.getElementById("sortSelect").addEventListener("change", e => {
    state.sort = e.target.value;
    refresh();
  });
}

/* ---------- SEARCH BAR ---------- */
function initSearchBar() {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  input.addEventListener("input", () => {
    buildSuggestions(input.value.trim());
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      state.query = input.value.trim();
      document.getElementById("suggestionsBox").classList.remove("open");
      refresh();
    }
  });

  btn.addEventListener("click", () => {
    state.query = input.value.trim();
    document.getElementById("suggestionsBox").classList.remove("open");
    refresh();
  });

  // Close suggestions on outside click
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-input-wrap")) {
      document.getElementById("suggestionsBox").classList.remove("open");
    }
  });
}

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initPillGroup("typeGroup", val => { state.type = val; refresh(); });
  initPillGroup("boardGroup", val => { state.board = val; refresh(); });
  initPillGroup("mediumGroup", val => { state.medium = val; refresh(); });
  initFacilityPills();
  initStars();
  initFeeRange();
  initFilterToggle();
  initReset();
  initSort();
  initSearchBar();

  // Initial render
  refresh();
});