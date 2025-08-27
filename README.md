# computer_repair_service/README.md

# PCRepair

This project is a web application for a computer and laptop repair service, built using Python and Django REST Framework. It includes separate applications for technical repairs, software services, and sales of spare parts and accessories. The application features an admin panel for managing services and products across all sections.

## Features

- **ტექნიკური შეკეთება**: Manage various technical repair services offered.
- **პროგრამული სერვისები**: Handle software-related services and support.
- **აქსესუარები**: Manage inventory and sales of spare parts and accessories.
- **ადმინ პანელი**: სერვისების და აქსესუარების დამატება, რედაქტირება და წაშლა.

## ინსტალაცია

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd computer_repair_service
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Run the migrations:
   ```
   python manage.py migrate
   ```

5. Start the development server:
   ```
   python manage.py runserver
   ```

## გამოყენება

Access the application at `http://127.0.0.1:8000/`. Use the admin panel to manage services and products.

## License

This project is licensed under the MIT License.