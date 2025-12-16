<template>
  <section class="max-w-6xl mx-auto px-8 py-24">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">Join Our Team</h2>
      <p class="text-slate-400 text-lg">We are looking for dedicated individuals to grow with us.</p>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      <div class="grid md:grid-cols-2">
        <div class="p-10 md:p-14">
          <div class="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-6">
            Now Hiring
          </div>
          <h3 class="text-3xl font-bold mb-6 text-white leading-tight">
            Security Guard Personnel <br/> (พนักงานรักษาความปลอดภัย)
          </h3>
          
          <div class="space-y-6 mb-10">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white">Qualifications</h4>
                <ul class="mt-2 space-y-1 text-slate-400 list-disc pl-4 text-sm">
                  <li>Age 18 - 55 years old (ชาย/หญิง อายุ 18-55 ปี)</li>
                  <li>Healthy and physically fit (สุขภาพแข็งแรง)</li>
                  <li>No criminal record (ไม่มีประวัติอาชญากรรม)</li>
                  <li>No experience required (Training provided)</li>
                </ul>
              </div>
            </div>

            <div class="flex items-start gap-4">
               <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white">Benefits</h4>
                 <ul class="mt-2 space-y-1 text-slate-400 list-disc pl-4 text-sm">
                  <li>Competitive salary (ค่าแรงมาตรฐาน)</li>
                  <li>Social Security (ประกันสังคม)</li>
                  <li>Uniforms & Equipment (ชุดเครื่องแบบ)</li>
                </ul>
              </div>
            </div>
          </div>

          <RouterLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all">
            Apply Now
          </RouterLink>
        </div>

        <!-- Image Side -->
        <div class="hidden md:block bg-slate-800 relative">
           <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
           <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
           <div class="absolute bottom-10 left-10 p-6">
              <p class="text-white font-medium text-lg">"Join a team that values discipline and integrity."</p>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>