# Afripay Transaction Dashboard

A mini transaction dashboard built with Next.js that allows users to manage transactions, filter by type, view summary statistics, and export data.

## Features

- ✅ View a list of transactions with id, description, amount, type, and date
- ✅ Add new transactions via a modal form
- ✅ Filter transactions by type (All, Credit, Debit)
- ✅ Display summary statistics (Total Inflow, Total Outflow, Net Balance)
- ✅ Persist data in localStorage
- ✅ Export transactions to CSV or Excel (XLSX) format
- ✅ Responsive design for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Export Library**: xlsx (for Excel export)
- **State Management**: React Hooks (useState, useEffect, useMemo)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── TransactionForm.tsx # Modal form for adding transactions
│   ├── TransactionList.tsx # Table component for displaying transactions
│   ├── FilterButtons.tsx   # Filter buttons component
│   └── SummaryStats.tsx    # Summary statistics cards
├── types/
│   └── transaction.ts      # TypeScript types for transactions
├── utils/
│   ├── storage.ts          # localStorage utilities
│   └── export.ts           # CSV and Excel export utilities
└── package.json
```

## Component Architecture

### Main Components

1. **TransactionForm** (`components/TransactionForm.tsx`)

   - Modal form component for adding new transactions
   - Handles form validation and submission
   - Reusable and self-contained

2. **TransactionList** (`components/TransactionList.tsx`)

   - Displays transactions in a responsive table
   - Shows empty state when no transactions exist
   - Color-coded transaction types

3. **FilterButtons** (`components/FilterButtons.tsx`)

   - Filter controls for All, Credit, and Debit
   - Active state styling
   - Reusable filter component

4. **SummaryStats** (`components/SummaryStats.tsx`)
   - Calculates and displays summary statistics
   - Shows Total Inflow, Total Outflow, and Net Balance
   - Color-coded values (green for positive, red for negative)

### Utilities

1. **Storage Utilities** (`utils/storage.ts`)

   - `getTransactionsFromStorage()`: Retrieves transactions from localStorage
   - `saveTransactionsToStorage()`: Saves transactions to localStorage
   - Handles SSR safety checks

2. **Export Utilities** (`utils/export.ts`)
   - `exportToCSV()`: Exports filtered transactions to CSV format
   - `exportToXLSX()`: Exports filtered transactions to Excel (XLSX) format
   - Both functions respect the current filter state

## Design Decisions

### State Management

- Used React Hooks (useState, useEffect, useMemo) for state management
- Centralized state in the main page component
- Used `useMemo` for filtered transactions to optimize performance

### Data Persistence

- Implemented localStorage for data persistence
- Data automatically saves on every transaction change
- Data loads on component mount

### Component Reusability

- Created small, focused, reusable components
- Each component has a single responsibility
- Props are well-typed with TypeScript

### Styling

- Used Tailwind CSS for utility-first styling
- Responsive design with mobile-first approach
- Consistent color scheme (blue for primary actions, green for credits, red for debits)

### User Experience

- Modal form for adding transactions (non-intrusive)
- Clear visual feedback for transaction types
- Empty states for better UX
- Export functionality respects current filters

### Type Safety

- Full TypeScript implementation
- Defined types for all data structures
- Type-safe props for all components

## Responsive Design

The dashboard is fully responsive:

- **Desktop**: Full-width layout with side-by-side statistics
- **Mobile**: Stacked layout with optimized spacing
- **Table**: Horizontal scroll on smaller screens

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

This project is part of the Afripay Frontend Engineer Assessment.

