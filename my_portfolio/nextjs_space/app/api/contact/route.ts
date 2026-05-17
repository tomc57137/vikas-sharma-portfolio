import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const name = (body?.name ?? '')?.toString?.()?.trim?.()
    const email = (body?.email ?? '')?.toString?.()?.trim?.()
    const message = (body?.message ?? '')?.toString?.()?.trim?.()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    await prisma.contactSubmission.create({
      data: { name, email, message },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
  }
}
