'use client'

import { motion } from "framer-motion"
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Gigy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to Gi.Gy!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card className="backdrop-blur-xl bg-white/10">
            <CardContent className="p-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
                <p className="text-white/80 text-center">
                  Have a question or want to collaborate? Reach out to us!
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white rounded-lg"
                  onClick={() => window.location.href = 'mailto:olj@outlook.com'}
                >
                  olj#outlook.com
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center text-white/60"
        >
          <p>&copy; {new Date().getFullYear()} Gigy. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}

