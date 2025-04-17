import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Hafiz Numair",
    role: "CEO & Founder",
    bio: "With over 10 years of experience in Teaching and business management.",
    image: "/images/numair_bhai.jpg",
  },
  {
    name: "Anees-ur-rehman",
    role: "CTO Co-founder",
    bio: "Expert in software architecture with a passion for innovative technology solutions.",
    image: "/images/numair_bhai.jpg",
  },
  {
    name: "Hamid Saifullah",
    role: "Director Co-founder",
    bio: "Full-stack AI developer specialized in creating scalable and efficient applications.",
    image: "/images/Hamid.jpg",
  },
  {
    name: "Abdullah Amjad",
    role: "AI/ML MERN Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: "/images/Abdullah_Amjad.jpg",
  },
  {
    name: "Abdullah Cheema",
    role: "MERN Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: "/images/Abdullah Cheema.jpg",
  },
  {
    name: "Abdullah Zulfqar",
    role: "AI/ML MERN Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: "/images/Abdullah_zulfqar.jpg",
  },
  {
    name: "Abdur Raffay ",
    role: "AI/ML Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: null,
  },
  {
    name: "Muhammad Rizwan",
    role: "AI/ML MERN Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: "/images/Muhammad_Rizwan.jpg",
  },
  {
    name: "Zaid khan",
    role: "AI/ML Intern",
    bio: "Creates user-centered designs that combine aesthetics with functionality.",
    image: "/images/zaid_khan.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-ips-accent font-medium mb-2">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ips-blue mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600">
            Our talented team of professionals is dedicated to delivering
            innovative solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-2xl font-bold text-ips-blue">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-ips-blue">
                  {member.name}
                </h3>
                <p className="text-ips-accent font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-ips-accent transition-colors"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-ips-accent transition-colors"
                  >
                    <TwitterIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-ips-accent transition-colors"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
