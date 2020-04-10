# work packages

v01
===
291
---
- landing page
- campground page (lists all campgrounds, name and image)
- data format
	[
		{name: "campground", image: "http://Image.com"},
		{name: "campground", image: "http://Image.com"}
	]	

293
---
- create haeder and footer partials
- include partials in landing page
- add bootstrap

294
---
- set up new campground POST route
  app.post("/campgrounds)
    get data from form
	redirect back to /campgrounds
- add in body-parser
- set up route to show form (according to 7 RESTful routes pattern)
- add basic unstyled form

295
---
- styling (title)
- grid 