'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'

export function EnhancedPortfolioComponent() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              Jane Doe
            </motion.h1>
            <nav className="hidden md:flex space-x-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className={`hover:text-primary transition-colors ${activeSection === section ? 'text-primary font-semibold' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-20">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-4">Frontend Software Engineer</h2>
              <p className="text-xl mb-8">Crafting beautiful and functional web experiences</p>
              <Button asChild size="lg">
                <a href="#contact">Get in touch</a>
              </Button>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10"
            >
              <ChevronDown className="h-8 w-8 text-primary" />
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-4">
                  Hi, I'm Jane Doe, a passionate frontend engineer with 5 years of experience in creating 
                  responsive and user-friendly web applications. I specialize in React, TypeScript, and 
                  modern CSS techniques.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me exploring new web technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-full"
              >
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Jane Doe"
                  className="rounded-lg object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Git'].map((skill, index) => (
                <Card key={skill} className="overflow-hidden">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {skill}
                        <Badge variant="secondary">Expert</Badge>
                      </CardTitle>
                    </CardHeader>
                  </motion.div>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A fully responsive e-commerce site built with Next.js and Stripe integration.',
                  link: '#',
                  image: '/placeholder.svg?height=200&width=400'
                },
                {
                  title: 'Task Management App',
                  description: 'A React-based task manager with drag-and-drop functionality and local storage.',
                  link: '#',
                  image: '/placeholder.svg?height=200&width=400'
                },
                {
                  title: 'Weather Dashboard',
                  description: 'A weather app that uses geolocation and a third-party API to display forecasts.',
                  link: '#',
                  image: '/placeholder.svg?height=200&width=400'
                },
                {
                  title: 'Portfolio Website',
                  description: 'A customizable portfolio template built with React and Tailwind CSS.',
                  link: '#',
                  image: '/placeholder.svg?height=200&width=400'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline">
                        <a href={project.link}>View Project</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 pt-6">
                <motion.a 
                  href="mailto:jane.doe@example.com" 
                  className="flex items-center space-x-2 text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  <span>jane.doe@example.com</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/janedoe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/janedoe</span>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/janedoe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-primary hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/janedoe</span>
                </motion.a>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted py-6 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Jane Doe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}