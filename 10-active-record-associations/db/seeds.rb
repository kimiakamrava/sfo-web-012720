dept_a = Department.create(name: "Obstrothemphlalmology")
dept_b = Department.create(name: "Footwear")
dept_c = Department.create(name: "Radiology")

drew = Doctor.create(name: "Drew", department: dept_a)
phil = Doctor.create(name: "Phil", department: dept_b)
frankenstein = Doctor.create(name: "Frankenstein", department: dept_c)

5.times do
	Patient.create(name: Faker::Name.name )
end

def time_rand from = 0.0, to = Time.now
  Time.at(from + rand * (to.to_f - from.to_f))
end

10.times do
	patient = Patient.all.sample
	doctor = Doctor.all.sample
	date_time = time_rand
	Appointment.create(date_time: date_time, doctor: doctor, patient: patient)
end
