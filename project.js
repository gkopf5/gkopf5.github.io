// Renders a single project detail page from ?id= query param
;(function () {
  const { profile, projects } = window.PORTFOLIO
  const root = document.getElementById('project-root')

  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const project = projects.find((p) => p.id === id)

  if (!project) {
    document.title = 'Project not found — ' + profile.name
    root.innerHTML = `
      <a href="index.html#work" class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
        ${window.icon('arrowLeft', 'size-4')} All projects
      </a>
      <div class="mt-16 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Project not found</h1>
        <p class="mt-3 text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist.</p>
      </div>`
    return
  }

  document.title = `${project.title} · ${profile.name}`
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', project.summary)

  const specTop = project.specs
    .slice(0, 2)
    .map(
      (spec) => `
      <div>
        <dt class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">${window.esc(spec.label)}</dt>
        <dd class="mt-1 font-mono text-sm font-medium text-foreground">${window.esc(spec.value)}</dd>
      </div>`,
    )
    .join('')

  const gallery = Array.isArray(project.gallery) ? project.gallery : []
  const galleryHtml = gallery.length
    ? `
    <section class="mt-14">
      <h2 class="font-mono text-xs uppercase tracking-widest text-muted-foreground">Gallery</h2>
      <div class="mt-4 grid gap-5 sm:grid-cols-2">
        ${gallery
          .map(
            (g) => `
          <figure class="overflow-hidden rounded-lg border border-border bg-card">
            <div class="relative aspect-[4/3] w-full bg-muted">
              <img src="${g.src}" alt="${window.esc(g.caption)}" loading="lazy"
                   class="h-full w-full object-cover"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="absolute inset-0 hidden flex-col items-center justify-center gap-2 text-muted-foreground">
                ${window.icon('image', 'size-6')}
                <span class="font-mono text-[10px] uppercase tracking-widest">Add image</span>
              </div>
            </div>
            <figcaption class="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">${window.esc(g.caption)}</figcaption>
          </figure>`,
          )
          .join('')}
      </div>
    </section>`
    : ''

  const videoHtml = project.video
    ? `
    <section class="mt-14">
      <h2 class="font-mono text-xs uppercase tracking-widest text-muted-foreground">Video</h2>
      <figure class="mt-4">
        <div class="overflow-hidden rounded-lg border border-border bg-black">
          <video controls playsinline preload="metadata" poster="${project.image}" class="aspect-video w-full">
            <source src="${project.video.src}" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
        ${project.video.caption ? `<figcaption class="mt-3 text-sm leading-relaxed text-muted-foreground">${window.esc(project.video.caption)}</figcaption>` : ''}
      </figure>
    </section>`
    : ''

  root.innerHTML = `
    <a href="index.html#work" class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
      ${window.icon('arrowLeft', 'size-4')} All projects
    </a>

    <header class="mt-8">
      <span class="font-mono text-xs font-medium tracking-widest text-primary">${window.esc(project.index)} / ${window.esc(project.tags[0])}</span>
      <h1 class="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">${window.esc(project.title)}</h1>
      <p class="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">${window.esc(project.summary)}</p>
    </header>

    <div class="mt-8 overflow-hidden rounded-lg border border-border bg-muted">
      <img src="${project.image}" alt="${window.esc(project.title)} hardware" class="aspect-[16/9] w-full object-cover" />
    </div>

    <dl class="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-6 sm:grid-cols-4">
      <div>
        <dt class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Role</dt>
        <dd class="mt-1 text-sm font-medium text-foreground">${window.esc(project.role)}</dd>
      </div>
      <div>
        <dt class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Timeline</dt>
        <dd class="mt-1 text-sm font-medium text-foreground">${window.esc(project.timeline)}</dd>
      </div>
      ${specTop}
    </dl>

    <div class="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
      <section>
        <h2 class="font-mono text-xs uppercase tracking-widest text-muted-foreground">Overview</h2>
        <div class="mt-4 space-y-4">
          ${project.overview.map((p) => `<p class="text-pretty leading-relaxed text-foreground/90">${window.esc(p)}</p>`).join('')}
        </div>

        <h2 class="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">Highlights</h2>
        <ul class="mt-4 space-y-3">
          ${project.highlights
            .map(
              (item) => `
            <li class="flex gap-3">
              ${window.icon('check', 'mt-0.5 size-4 shrink-0 text-primary')}
              <span class="text-sm leading-relaxed text-foreground/90">${window.esc(item)}</span>
            </li>`,
            )
            .join('')}
        </ul>

        <h2 class="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">Timeline</h2>
        <ol class="mt-4 border-l border-border">
          ${project.milestones
            .map(
              (m) => `
            <li class="relative pb-6 pl-6 last:pb-0">
              <span class="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-primary bg-background" aria-hidden="true"></span>
              <span class="font-mono text-[10px] uppercase tracking-widest text-primary">${window.esc(m.phase)}</span>
              <h3 class="mt-1 text-sm font-medium text-foreground">${window.esc(m.title)}</h3>
              <p class="mt-1 text-sm leading-relaxed text-muted-foreground">${window.esc(m.detail)}</p>
            </li>`,
            )
            .join('')}
        </ol>
      </section>

      <aside class="space-y-6">
        <div class="rounded-lg border border-border bg-card p-5">
          <h2 class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Full specs</h2>
          <dl class="mt-3 space-y-3">
            ${project.specs
              .map(
                (spec) => `
              <div class="flex items-baseline justify-between gap-3">
                <dt class="text-sm text-muted-foreground">${window.esc(spec.label)}</dt>
                <dd class="font-mono text-sm font-medium text-foreground">${window.esc(spec.value)}</dd>
              </div>`,
              )
              .join('')}
          </dl>
        </div>

        <div class="rounded-lg border border-border bg-card p-5">
          <h2 class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Tools</h2>
          <div class="mt-3 flex flex-wrap gap-1.5">
            ${project.tags
              .map(
                (tag) =>
                  `<span class="rounded-sm bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground">${window.esc(tag)}</span>`,
              )
              .join('')}
          </div>
        </div>

        <div class="rounded-lg border border-border bg-card p-5">
          <h2 class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project report</h2>
          <a href="${project.report.file}" target="_blank" rel="noreferrer"
             class="mt-3 flex items-center gap-3 rounded-md border border-border bg-background p-3 transition-colors hover:border-primary/60 hover:bg-secondary">
            <span class="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              ${window.icon('fileText', 'size-5')}
            </span>
            <span class="min-w-0 flex-1">
              <span class="block truncate text-sm font-medium text-foreground">${window.esc(project.report.title)}</span>
              <span class="block font-mono text-[11px] text-muted-foreground">${window.esc(project.report.size)} · ${window.esc(project.report.pages)}</span>
            </span>
            ${window.icon('download', 'size-4 shrink-0 text-muted-foreground')}
          </a>
        </div>
      </aside>
    </div>

    ${galleryHtml}
    ${videoHtml}`
})()
