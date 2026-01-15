# Contact App

A simple ** Contact Messages application** built with **Next.js 16 (App Router)** demonstrating **Server Actions**, **PostgreSQL**, **Prisma**, **shadcn/ui**, and **revalidation**.

Users can submit contact form, and can view, mark messages as **read** or **replied**, all without writing traditional API routes.

---

## ✨ Features

- ⚡ **Next.js 16 App Router**
- 🧠 **Server Actions** (no REST or API routes)
- 🗄️ **PostgreSQL** database
- 🔗 **Prisma ORM**
- 🎨 **shadcn/ui** components
- ♻️ **Revalidation / cache updates**
- 📝 Contact form with:
  - Name
  - Email
  - Subject
  - Message
- 📬 Message dashboard:
  - Showing all message as cards
  - User can mark the message as **Read**
  - User can mark the message as **Replied**

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Server State:** Next.js Server Actions
- **Deployment-ready:** Vercel / any Node-compatible host

---

## Clone the repository

```
 git clone https://github.com/Shivansh-Pandey-4/contact-form.git
 cd contact-form
```

## Set up environment variables

Create a .env file:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

# Run Prisma migrations

```
npx prisma migrate dev
npx prisma generate
```

## 📸 Screenshots

### Contact Form

![Contact Form](./screenshots/home.png)

### Message Card Actions

![Message Card](./screenshots/message-card.png)
