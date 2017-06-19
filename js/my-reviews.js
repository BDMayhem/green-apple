if (void 0 === WeddingWire || !WeddingWire) var WeddingWire = {};
WeddingWire.headLoc = document.getElementsByTagName("head").item(0), WeddingWire.getDaySeed = function() {
    return (new Date).getDate()
}, WeddingWire.getHourSeed = function() {
    return (new Date).getHours()
}, WeddingWire.getTrimmedString = function(e, d) {
    return e === undefined ? "&nbsp;" : e.length <= d ? e : e.substr(0, e.lastIndexOf(" ", d - 3)) + "..."
}, WeddingWire.createRoundedDiv = function(e, d, i, s, r, a, t) {
    var w = "border-left:1px solid " + e + "; border-right:1px solid " + e + ";",
        c = w;
    (a || a === undefined) && (c += "background:" + d + ";"), (t || t === undefined) && (w += "background:" + d + ";");
    var n = "<div>";
    return i && (n += '<b class="ww-roundedBorderTop"><b class="ww-roundedBorder1" style="background:' + e + ';"></b><b class="ww-roundedBorder2" style="' + c + '"></b><b class="ww-roundedBorder3" style="' + c + '"></b><b class="ww-roundedBorder4" style="' + c + '"></b></b>'), n += "<div style='border:0 solid " + e + "; border-width:0 1px;'>", n += r, n += "</div>", s && (n += '<b class="ww-roundedBorderBottom"><b class="ww-roundedBorder4" style="' + w + '"></b><b class="ww-roundedBorder3" style="' + w + '"></b><b class="ww-roundedBorder2" style="' + w + '"></b><b class="ww-roundedBorder1" style="background:' + e + ';"></b></b>'), n += "</div>"
}, WeddingWire.addWidgetCSS = function() {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("href", "https://wwcdn.weddingwire.com/assets/global/widget-3a51635710a8e2a01e7058d39d672e17ee8e66844a48b5db83bafaa65ac93edd.css"), e.setAttribute("id", "ww-widgets-css"), null === document.getElementById(e.id) && WeddingWire.headLoc.appendChild(e)
}, WeddingWire.addWidgetCSS(), WeddingWire.RandomNumberGenerator = function(e) {
    return this.seed = e, this.A = 48271, this.M = 2147483647, this.Q = this.M / this.A, this.R = this.M % this.A, this.oneOverM = 1 / this.M, this.next = function(e) {
        e === undefined && (e = 1), e += 2;
        for (var d = 0; d < e; d++) {
            var i = this.seed / this.Q,
                s = this.seed % this.Q,
                r = this.A * s - this.R * i;
            this.seed = r > 0 ? r : r + this.M
        }
        return this.seed * this.oneOverM
    }, this
}, WeddingWire.getAvgVendorScore = function(e) {
    var d = parseFloat(e.average_review_score);
    return parseInt(d, 10) == d && (d += ".0"), d
}, WeddingWire.getReviewScore = function(e) {
    var d = parseFloat(e.professional_score);
    return d += parseFloat(e.service_score), d += parseFloat(e.value_score), d += parseFloat(e.flexibility_score), (d += parseFloat(e.response_score)) / 5
}, WeddingWire.getStarPathMap = {
    "00": "https://wwcdn.weddingwire.com/assets/widgets/stars/00_stars-d7fd1e49097052dcd872e9a287e6bf87ce85b8df5959bd779140d44c4ab307f2.gif",
    "05": "https://wwcdn.weddingwire.com/assets/widgets/stars/05_stars-9bd7bba6bd511c209eefe542c71b6fece58a771306f69697ad1a641bbfed04f4.gif",
    10: "https://wwcdn.weddingwire.com/assets/widgets/stars/10_stars-24fa7fbcd5eaff23c01babf1e40961cbb5b5498c1dcd9c919c46e476ce967402.gif",
    15: "https://wwcdn.weddingwire.com/assets/widgets/stars/15_stars-de1f0d7f8e2b2655c8c5a75a30fd1b7ab9326cdcfdca7d8a12675768b70e34e9.gif",
    20: "https://wwcdn.weddingwire.com/assets/widgets/stars/20_stars-068a5370b486c3207fa5f6d8977a23096b3d2d9d6f1d8babd83f3d8a094527e1.gif",
    25: "https://wwcdn.weddingwire.com/assets/widgets/stars/25_stars-71b7aded116f8781c79a0db3bb535f926c6d4aa36e466eca88415cb74e41912e.gif",
    30: "https://wwcdn.weddingwire.com/assets/widgets/stars/30_stars-192c2be4093e3dc5fb23b49d3aaa3eac9bb3d631e7ac397ce166e04c704a0f38.gif",
    35: "https://wwcdn.weddingwire.com/assets/widgets/stars/35_stars-56e481dccad6524dc9be172fb921dd3eb7aacdc42a92648f098f90aad7864c67.gif",
    40: "https://wwcdn.weddingwire.com/assets/widgets/stars/40_stars-eba73cc9e488e933476d4fe15d05de6f6a13a90490eb643c69b14e3f5a742daa.gif",
    45: "https://wwcdn.weddingwire.com/assets/widgets/stars/45_stars-09f23fa187cb4975125f94788e25b75bb3ec251184cfb72a525e2d2ce94e6577.gif",
    50: "https://wwcdn.weddingwire.com/assets/widgets/stars/50_stars-75f9ad0dee88d844a13200dc3136bb4f0c68d44062cff80153f9c984fb7a4b20.gif"
}, WeddingWire.getReviewStars = function(e) {
    e = parseFloat(e);
    var d = 0,
        i = 10 * e,
        s = parseInt(i) % 5;
    return d = s > 2.5 ? i + (5 - s) : i - s, d = d.toString(), 1 == d.length && (d = "0" + d), WeddingWire.getStarPathMap[d]
}, WeddingWire.getSmallStarPathMap = {
    0: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/0_stars-ff1038d701d39d3e6a474f108c5a135d16bef3818aef032fd8018797b9896cfe.gif",
    5: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/5_stars-985d7be08c9aadae4766788828368aca41c751d928ace3cc35228f2d20b1c06b.gif",
    10: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/10_stars-6eaa87a5aa429bc0e3868022465b57af0c37d6c1f9711e4a2a505eabc42bf425.gif",
    15: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/15_stars-0a0b36e7a083afa305719c84375f6809b1c47c2c633e00929a5acd196ee88f99.gif",
    20: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/20_stars-91ccabb89d4edd85cf9629f344366fd6b8885c00ca889c1c38cd671b7092c5d7.gif",
    25: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/25_stars-e34becb2f3711f0a3429dedda27a03ae1141b0813b4da733161e78db09497e06.gif",
    30: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/30_stars-d552568f69152783c744902b205f995b06239be8d06db7de5303867f9b8df265.gif",
    35: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/35_stars-3ffa034c574a5b481c173f8250828e12f53c953d7bf8a302c4f1d00c35270ed7.gif",
    40: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/40_stars-a0a4a0816729c6574c223c13b7046fc5d6c90e79e1d24ea31561c18a10b31441.gif",
    45: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/45_stars-62b911ff0a70c8df3a04e75095c2d3a9abc0c8bc9441668d5ac4a40ff7048a52.gif",
    50: "https://wwcdn.weddingwire.com/assets/widgets/reviewstars/50_stars-a02cdad2f0bfcab4568b3847e10c81b6161a8a19ece1213ad5cc1c20970e1060.gif"
}, WeddingWire.getSmallReviewStars = function(e) {
    e = parseFloat(e);
    var d = 0,
        i = 10 * e,
        s = parseInt(i, 10) % 5;
    return d = s > 2.5 ? i + (5 - s) : i - s, WeddingWire.getSmallStarPathMap[d]
}, WeddingWire.getVendorPhone = function(e) {
    var d = "";
    if (0 !== e.locations.length && (d = e.locations[0].phone_primary), null === d || d === undefined || "" === d) d = "(No Phone Number)";
    else {
        for (var i = "", s = 0; s < d.length; s++) 3 == s || 6 == s ? (i += "-", i += d.charAt(s)) : i += d.charAt(s);
        d = i
    }
    return d
}, "undefined" == typeof WeddingWire.ensureInit && (WeddingWire.ensureInit = function(e) {
    e()
}), WeddingWire.filterLowReviews = function(e) {
    for (var d = [], i = 0; i < e.reviews.length && d.length < 3; i++) WeddingWire.getReviewScore(e.reviews[i]) >= 4 && d.push(e.reviews[i]);
    e.reviews = d
}, WeddingWire.getReviewWidget = function(e) {
    var d = "";
    if (d += '<div class="ww-reviews-header-box">', d += '\t<div class="ww-reviews-header-box-left">', d += '\t\t<div class="ww-header1">Read Our Reviews</div>', d += '\t\t<div class="ww-header2">from past clients</div>', d += "\t</div>", d += '\t<div class="ww-reviews-header-box-right" style="background-image:url(\'' + WeddingWire.getReviewStars(e.average_review_score) + "');\">", d += '\t\t<a target="_blank" href="' + e.storefront_reviews_url + '">' + e.review_count + " reviews</a>", d += "\t</div>", d += "</div>", d += '<div class="ww-reviews-box">', WeddingWire.filterLowReviews(e), 0 == e.reviews.length) d += "<div class='ww-noresults-box'>There are no reviews to display.</div>";
    else
        for (var i = 0; i < e.reviews.length && i < 3; i++) d += WeddingWire.getReviewDiv(e.reviews[i], i + 1, e.storefront_reviews_url);
    return d += '<div class="ww-reviews-footer">', e.review_count > 0 && (d += '<div class="ww-reviews-footer-text">Read all <a target="_blank" href="' + e.storefront_reviews_url + '">' + e.review_count + " Reviews</a> at</div>"), d += '<div class="ww-reviews-footer-img"><a target="_blank" href="https://www.weddingwire.com/reviews/green-apple-weddings-events-ct-nyc-hudson-valley/13e63c2c4b80133f.html"><img style="border:0pt none;" alt="Weddings, Wedding Cakes,  Wedding Planning, Wedding Checklists, Free Wedding Websites, Wedding Dresses, Wedding Ideas & more" src="https://wwcdn.weddingwire.com/assets/widgets/logo/WWlogo-130x30-e1afd199c93b377dea05a4354bf07bb3a6992cdb0c6afcb848ce30ac2a310c70.gif"/></a></div>', d += "</div>", d += "</div>"
}, WeddingWire.createReview = function(e) {
    WeddingWire.reviewWidgetId = e.id;
    var d = "https://www.weddingwire.com/api/v2/GetVendorDetails?partnerkey=163r5mm3&vendor_id=" + e.vendorId + "&reviews=yes&reviews_page_size=10&reviews_page=1&callback=WeddingWire.writeReviewsCallback",
        i = document.createElement("script");
    i.setAttribute("type", "text/javascript"), i.setAttribute("src", d), WeddingWire.headLoc.appendChild(i)
}, WeddingWire.writeReviewsCallback = function(e) {
    var d = document.getElementById(WeddingWire.reviewWidgetId);
    d.className = "ww-reset ww-reviews-widget", d.innerHTML = WeddingWire.getReviewWidget(e)
}, WeddingWire.getReviewDiv = function(e, d, i) {
    var s = WeddingWire.getReviewScore(e);
    parseInt(s) == s && (s += ".0");
    var r = "";
    WeddingWire.getTrimmedString(e.reviewer_comments, 140) != e.reviewer_comments && (r = '<a target="_blank" href="' + i + '">read full review</a>');
    var a = '<div class="ww-review-box-outer">';
    return a += '<div id="review' + d + '" class="ww-review-box">', a += '<b class="ww-btop"><b></b></b><div class="ww-review-content">', a += '<div class="ww-review-score-box" style="background-image:url(\'' + WeddingWire.getReviewStars(s) + "');\">" + s + "/5.0</div>", a += '<div class="ww-review-comment-box">' + WeddingWire.getTrimmedString(e.reviewer_comments, 300) + " " + r + "</div>", a += '</div><b class="ww-bbot"><b></b></b>', a += "</div>", a += "</div>"
};

console.log(reviews);