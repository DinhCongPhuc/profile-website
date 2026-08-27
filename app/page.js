import Nav from "./components/Nav";
import RevealSection from "./components/RevealSection";

const SKILLS = [
  { group: "Ngôn ngữ", items: ["JavaScript", "Dart", "Kotlin", "Python"] },
  { group: "Đa nền tảng", items: ["React Native", "Flutter", "Next.js", ".NET MAUI"] },
  { group: "Công cụ", items: ["Git & GitHub", "Figma", "Firebase", "Docker"] },
];

const TIMELINE = [
  {
    year: "2023 — Hiện tại",
    title: "Sinh viên CNTT",
    place: "Trường Đại học CNTT và Truyền thông Việt Hàn",
    desc: "Chuyên ngành Phát triển ứng dụng đa nền tảng. Tham gia CLB lập trình của khoa.",
  },
  {
    year: "2024",
    title: "Thực tập sinh Mobile Developer",
    place: "Công ty XYZ",
    desc: "Xây dựng tính năng cho ứng dụng Flutter, làm việc trong nhóm Scrum 5 người.",
  },
  {
    year: "2025",
    title: "Freelance Developer",
    place: "Dự án cá nhân & khách hàng nhỏ",
    desc: "Nhận và hoàn thành các dự án web/app theo yêu cầu khách hàng.",
  },
];

const PROJECTS = [
  {
    name: "Ứng dụng Quản lý Chi tiêu",
    stack: "Flutter · SQLite",
    desc: "Ứng dụng theo dõi thu chi cá nhân, đồng bộ trên Android và iOS.",
  },
  {
    name: "Website Đặt lịch Khám bệnh",
    stack: "Next.js · MongoDB",
    desc: "Nền tảng đặt lịch trực tuyến cho phòng khám tư nhân.",
  },
  {
    name: "App Học Từ Vựng",
    stack: "React Native · Firebase",
    desc: "Ứng dụng học từ vựng tiếng Anh theo phương pháp lặp lại ngắt quãng.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* HERO — styled like a stamped ID / profile card */}
        <section className="flex min-h-[calc(100vh-73px)] items-center py-16">
          <div className="card-edge relative w-full rounded-[18px] bg-card p-8 shadow-sm md:p-14">
            <span className="stamp absolute -top-4 right-8 rounded-full border border-teal px-4 py-1 font-mono text-xs uppercase tracking-widest text-teal md:right-14">
              Sẵn sàng nhận việc
            </span>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Hồ sơ cá nhân
            </p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-6xl">
              Đinh Công Phúc
            </h1>

            <p className="mt-3 font-display text-xl italic text-inksoft md:text-2xl">
              Lập trình viên ứng dụng đa nền tảng
            </p>

            <p className="mt-6 max-w-xl text-inksoft">
              Mình xây dựng ứng dụng mượt mà trên Web, Android và iOS từ một
              nguồn mã duy nhất — tập trung vào hiệu năng, giao diện gọn gàng
              và trải nghiệm người dùng dễ chịu.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                Liên hệ với mình
              </a>
              <a
                href="#projects"
                className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Xem dự án
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 font-mono text-xs text-inksoft md:grid-cols-4">
              <div>
                <dt className="uppercase tracking-widest">Vị trí</dt>
                <dd className="mt-1 text-ink">Đà Nẵng, VN</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest">Email</dt>
                <dd className="mt-1 text-ink">[email protected]</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest">Trạng thái</dt>
                <dd className="mt-1 text-ink">Sinh viên năm 3</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest">GitHub</dt>
                <dd className="mt-1 text-ink">@dinhcongphuc</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ABOUT */}
        <RevealSection as="section" className="hr-line py-20" >
          <div id="about">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Giới thiệu
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
              Mình thích biến một ý tưởng thành ứng dụng chạy được trên mọi
              thiết bị.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-inksoft">
              Hiện tại mình là sinh viên năm 3 ngành Công nghệ thông tin,
              theo hướng phát triển ứng dụng đa nền tảng. Mình đã hoàn thành
              một số dự án cá nhân và thực tập với Flutter, React Native và
              Next.js. Mình quan tâm đến việc viết mã sạch, dễ bảo trì và
              thiết kế giao diện thân thiện với người dùng.
            </p>
          </div>
        </RevealSection>

        {/* SKILLS */}
        <RevealSection as="section" className="hr-line py-20" >
          <div id="skills">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Kỹ năng
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Công cụ mình dùng hằng ngày
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {SKILLS.map((group) => (
                <div key={group.group}>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-teal">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line pb-2 text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* TIMELINE — genuine chronological sequence, so ordered markers are justified */}
        <RevealSection as="section" className="hr-line py-20" >
          <div id="timeline">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Quá trình
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Học tập & kinh nghiệm
            </h2>

            <ol className="mt-10 space-y-10 border-l border-line pl-8">
              {TIMELINE.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-accent" />
                  <p className="font-mono text-xs uppercase tracking-widest text-inksoft">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm text-teal">{item.place}</p>
                  <p className="mt-2 max-w-xl text-inksoft">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        {/* PROJECTS */}
        <RevealSection as="section" className="hr-line py-20" >
          <div id="projects">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Dự án
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Một vài dự án gần đây
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PROJECTS.map((project) => (
                <div
                  key={project.name}
                  className="card-edge relative rounded-[14px] bg-card p-6 transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-teal">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-inksoft">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* CONTACT */}
        <RevealSection as="section" className="hr-line py-20" >
          <div id="contact" className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Liên hệ
            </p>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl text-ink md:text-4xl">
              Cùng trao đổi về một dự án hoặc cơ hội thực tập?
            </h2>
            <p className="mt-4 text-inksoft">
              Gửi email cho mình, mình phản hồi trong vòng 24 giờ.
            </p>
            <a
              href="mailto:[email protected]"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              [email protected]
            </a>

            <div className="mt-6 flex justify-center gap-6 font-mono text-sm text-inksoft">
              <a href="#" className="hover:text-accent">GitHub</a>
              <a href="#" className="hover:text-accent">LinkedIn</a>
              <a href="#" className="hover:text-accent">CV (PDF)</a>
            </div>
          </div>
        </RevealSection>

        <footer className="py-10 text-center font-mono text-xs text-inksoft">
          © {new Date().getFullYear()} Đinh Công Phúc. Xây dựng bằng Next.js.
        </footer>
      </main>
    </>
  );
}
