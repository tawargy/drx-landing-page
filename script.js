document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      const spans = menuToggle.querySelectorAll("span")
      spans[0].classList.toggle("rotate-45")
      spans[1].classList.toggle("opacity-0")
      spans[2].classList.toggle("-rotate-45")
    })
  }

  // Testimonial slider
  const testimonials = document.querySelectorAll(".testimonial")
  const dots = document.querySelectorAll(".dot")
  const prevButton = document.querySelector(".prev-testimonial")
  const nextButton = document.querySelector(".next-testimonial")
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active")
    })

    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    testimonials[index].classList.add("active")
    dots[index].classList.add("active")
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      currentTestimonial--
      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1
      }
      showTestimonial(currentTestimonial)
    })

    nextButton.addEventListener("click", () => {
      currentTestimonial++
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0
      }
      showTestimonial(currentTestimonial)
    })
  }

  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTestimonial = index
        showTestimonial(currentTestimonial)
      })
    })
  }

  // Auto-rotate testimonials
  setInterval(() => {
    if (testimonials.length > 0) {
      currentTestimonial++
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0
      }
      showTestimonial(currentTestimonial)
    }
  }, 5000)

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
        }
      }
    })
  })

  // Placeholder for the dashboard and patient record images
  // In a real implementation, you would use actual screenshots of your app
  const heroImg = document.getElementById("hero-img")
  const previewImg = document.getElementById("preview-img")

  if (heroImg) {
    // This would be replaced with your actual dashboard image
    heroImg.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-04-23%2020-41-52-lm9TgMxxBIVTSNVkRDIU5WYlko5plZ.png"
  }

  if (previewImg) {
    // This would be replaced with your actual patient record image
    previewImg.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-04-23%2020-42-02-n3msRh6YkmE9iTUdbT6YCN6155Ir4n.png"
  }

  // Create placeholder SVG icons for the features section
  const createPlaceholderSVG = (iconName) => {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#1E88E5" fill-opacity="0.2"/>
            <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#1E88E5" text-anchor="middle" dominant-baseline="middle">${iconName[0]}</text>
        </svg>`
  }

  // Create placeholder icons for download section
  const createOSIcon = (osName) => {
    return `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="#1E88E5" fill-opacity="0.2"/>
            <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#1E88E5" text-anchor="middle" dominant-baseline="middle">${osName[0]}</text>
        </svg>`
  }

  // Create placeholder social media icons
  const createSocialIcon = (socialName) => {
    return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="10" fill="#FFFFFF"/>
            <text x="50%" y="50%" font-family="Arial" font-size="12" fill="#1A2035" text-anchor="middle" dominant-baseline="middle">${socialName[0]}</text>
        </svg>`
  }

  // Set placeholder icons
  document.querySelectorAll(".feature-icon img").forEach((icon) => {
    const iconName = icon.alt.split(" ")[0]
    const svgData = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(createPlaceholderSVG(iconName))
    icon.src = svgData
  })

  document.querySelectorAll(".download-button img").forEach((icon) => {
    const osName = icon.alt
    const svgData = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(createOSIcon(osName))
    icon.src = svgData
  })

  document.querySelectorAll(".social-links img").forEach((icon) => {
    const socialName = icon.alt
    const svgData = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(createSocialIcon(socialName))
    icon.src = svgData
  })
})
