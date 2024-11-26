**CarePulse-Carepoint**

CarePulse-Carepoint is a modern web application built with Next.js for managing and streamlining healthcare workflows. It integrates robust form validation, user interaction features, and a customizable theme, offering an optimized experience for healthcare providers and users.

**Features**
------------

*   📝 **Advanced Form Handling:**
    
    *   Built with react-hook-form and zod for flexible and type-safe form validation.
        
*   🌐 **Global Theming:**
    
    *   Dynamic theming capabilities using next-themes for personalized user experiences.
        
*   📅 **Date and Time Picker:**
    
    *   Seamless date and time selection with react-datepicker.
        
*   📞 **Phone Input:**
    
    *   User-friendly phone number validation via react-phone-number-input.
        
*   📨 **Twilio Integration:**
    
    *   SMS functionality enabled with Twilio.
        
*   🎨 **Responsive and Accessible UI:**
    
    *   Styled with TailwindCSS and enhanced with Radix UI components.
        

**Tech Stack**
--------------

*   **Framework:** [Next.js](https://nextjs.org/) v14
    
*   **UI Styling:** [TailwindCSS](https://tailwindcss.com/) v3.4
    
*   **Forms and Validation:**
    
    *   [react-hook-form](https://react-hook-form.com/)
        
    *   [zod](https://zod.dev/)
        
*   **Date and File Handling:**
    
    *   [react-datepicker](https://reactdatepicker.com/)
        
    *   react-dropzone
        
*   **Phone Number Input:** react-phone-number-input
    
*   **SMS Services:** [Twilio](https://www.twilio.com/)
    

**Getting Started**
-------------------

### **1\. Clone the Repository**
 bashCopy codegit clone https://github.com/yourusername/carepulse.git  cd carepulse   `

### **2\. Install Dependencies**

Ensure Node.js is installed, then run:
 bashCopy codenpm install   `

### **3\. Set Environment Variables**

Create a .env.local file in the root directory and add the following:
NEXT\_PUBLIC\_TWILIO\_ACCOUNT\_SID=

NEXT\_PUBLIC\_TWILIO\_AUTH\_TOKEN=

NEXT\_PUBLIC\_API\_URL=http://localhost:3000 \`

### **4\. Run the Development Server**
  bashCopy codenpm run dev   

Visit the application at carepoint-carepulse.vercel.app/ .

**Scripts**
-----------



npm run dev Starts the development server.

npm run build Builds the project for production.

npm run start Runs the production build.

npm run lint Lints the codebase using ESLint.

**Dependencies**
----------------

Refer to the package.json for the full list of dependencies. Key libraries include:

*   react-hook-form and zod for form validation.
    
*   react-datepicker for date and time selection.
    
*   react-dropzone for file uploads.
    
*   twilio for SMS functionality.
    
*   @radix-ui components for accessible UI features.
    

**Development Tools**
---------------------

*   **TypeScript:** Ensures type safety and code reliability.
    
*   **ESLint and Prettier:** Maintain code consistency and formatting.
    
*   **PostCSS:** Enhance styling workflows.
    

**Contributing**
----------------

Contributions are welcome! Follow these steps:

1.  Fork the repository.
    
2.  bashCopy codegit checkout -b feature-name
    
3.  bashCopy codegit commit -m "Add your message here"git push origin feature-name
    
4.  Create a pull request.
    

**License**
-----------

This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgements**
--------------------

*   [Next.js](https://nextjs.org/) for the core framework.
    
*   [Radix UI](https://radix-ui.com/) for accessible UI components.
    
*   [TailwindCSS](https://tailwindcss.com/) for styling.
    
*   [Twilio](https://www.twilio.com/) for seamless SMS integration.
