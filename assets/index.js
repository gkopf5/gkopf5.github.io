// Renders the home page from window.PORTFOLIO 
;(function () {
  const { profile, projects, skillGroups } = window.PORTFOLIO

  // Fill any <span data-icon="name" data-cls="..."> placeholders
  document.querySelectorAll('[data-icon]').forEach((el) => {
    el.innerHTML = window.icon(el.getAttribute('data-icon'), el.getAttribute('data-cls') || 'size-4')
  })

  // Hero portrait — show the image if it loads, otherwise keep the placeholder
  const portrait = document.getElementById('hero-portrait')
  const portraitFallback = document.getElementById('hero-portrait-fallback')
  if (profile.portrait) {
    portrait.addEventListener('load', () => {
      portraitFallback.style.display = 'none'
    })
    portrait.addEventListener('error', () => {
      portrait.style.display = 'none'
      portraitFallback.style.display = 'grid'
    })
    portrait.src = profile.portrait
  }

  // Hero content
  document.getElementById('hero-intro').textContent = profile.intro
  document.getElementById('hero-resume').setAttribute('href', profile.links.resume)
  const linkedin = document.getElementById('hero-linkedin')
  linkedin.setAttribute('href', profile.links.linkedin)
  linkedin.innerHTML = window.icon('linkedin', 'size-4')

  // Hero stats
  const stats = [
    { label: 'Program', value: profile.status, icon: false },
    { label: 'Based in', value: profile.location, icon: true },
    { label: 'Focus', value: 'Robotics · Controls · Autonomy', icon: false },
  ]
  document.getElementById('hero-stats').innerHTML = stats
    .map(
      (item) => `
      <div class="bg-card px-4 py-4">
        <dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">${window.esc(item.label)}</dt>
        <dd class="mt-1 flex items-center gap-1.5 text-sm font-medium leading-snug">
          ${item.icon ? window.icon('mapPin', 'size-3.5 text-primary') : ''}
          ${window.esc(item.value)}
        </dd>
      </div>`,
    )
    .join('')

  // Projects grid
  document.getElementById('projects-grid').innerHTML = projects
    .map(
      (project) => `
      <a href="project.html?id=${encodeURIComponent(project.id)}"
         class="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50">
        <div class="relative aspect-[16/10] overflow-hidden bg-muted">
          <img src="${project.image}" alt="${window.esc(project.title)} hardware"
               class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
          <span class="absolute left-3 top-3 rounded-sm bg-background/85 px-2 py-1 font-mono text-[10px] font-medium tracking-widest text-muted-foreground backdrop-blur">${window.esc(project.index)}</span>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <div class="flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold leading-snug tracking-tight">${window.esc(project.title)}</h3>
            ${window.icon('arrowUpRight', 'mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary')}
          </div>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">${window.esc(project.summary)}</p>
          <dl class="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
            ${project.specs
              .map(
                (spec) => `
              <div>
                <dt class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">${window.esc(spec.label)}</dt>
                <dd class="font-mono text-sm font-medium text-foreground">${window.esc(spec.value)}</dd>
              </div>`,
              )
              .join('')}
          </dl>
          <div class="mt-4 flex flex-wrap gap-1.5">
            ${project.tags
              .map(
                (tag) =>
                  `<span class="rounded-sm bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground">${window.esc(tag)}</span>`,
              )
              .join('')}
          </div>
        </div>
      </a>`,
    )
    .join('')

  // Skills grid
  document.getElementById('skills-grid').innerHTML = skillGroups
    .map(
      (group) => `
      <div class="bg-card p-5">
        <h3 class="font-mono text-xs uppercase tracking-[0.18em] text-primary">${window.esc(group.title)}</h3>
        <ul class="mt-3 space-y-2">
          ${group.items
            .map(
              (item) => `
            <li class="flex items-start gap-2 text-sm text-foreground">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"></span>
              ${window.esc(item)}
            </li>`,
            )
            .join('')}
        </ul>
      </div>`,
    )
    .join('')

  // Contact
  document.getElementById('contact-cta').setAttribute('href', `mailto:${profile.email}`)
  const contactLinks = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
    { label: 'Phone', value: profile.phoneDisplay, href: profile.phoneHref, icon: 'phone' },
    { label: 'LinkedIn', value: 'in/george-kopf-v', href: profile.links.linkedin, icon: 'linkedin' },
  ]
  document.getElementById('contact-grid').innerHTML = contactLinks
    .map((link) => {
      const external = !(link.href.startsWith('mailto:') || link.href.startsWith('tel:'))
      return `
      <a href="${link.href}" ${external ? 'target="_blank" rel="noreferrer"' : ''}
         class="group flex flex-col gap-3 bg-card p-5 transition-colors hover:bg-accent">
        ${window.icon(link.icon, 'size-5 text-primary')}
        <div>
          <div class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">${window.esc(link.label)}</div>
          <div class="mt-1 text-sm font-medium text-foreground">${window.esc(link.value)}</div>
        </div>
      </a>`
    })
    .join('')

  // Footer
  document.getElementById('footer-copy').textContent = `© ${new Date().getFullYear()} ${profile.name}`

  // Sticky header scroll state
  const header = document.getElementById('site-header')
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('border-border', 'bg-background/85', 'backdrop-blur-md')
      header.classList.remove('border-transparent')
    } else {
      header.classList.remove('border-border', 'bg-background/85', 'backdrop-blur-md')
      header.classList.add('border-transparent')
    }
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})()
