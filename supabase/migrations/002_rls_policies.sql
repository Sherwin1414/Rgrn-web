-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE funeral_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE arrangements ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Users table policies
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid()::text = id OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid()::text = id);

-- Admins can view and update all users
CREATE POLICY "Admins can manage users"
  ON users FOR ALL
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Funeral packages are publicly readable
CREATE POLICY "Packages are publicly readable"
  ON funeral_packages FOR SELECT
  USING (true);

-- Only admins can manage packages
CREATE POLICY "Only admins can manage packages"
  ON funeral_packages FOR INSERT
  WITH CHECK ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can update packages"
  ON funeral_packages FOR UPDATE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can delete packages"
  ON funeral_packages FOR DELETE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Arrangements policies
-- Customers can view their own arrangements
CREATE POLICY "Customers can view own arrangements"
  ON arrangements FOR SELECT
  USING (
    auth.uid()::text = customer_id 
    OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin')
  );

-- Customers can create arrangements
CREATE POLICY "Customers can create arrangements"
  ON arrangements FOR INSERT
  WITH CHECK (auth.uid()::text = customer_id);

-- Customers can update their own arrangements
CREATE POLICY "Customers can update own arrangements"
  ON arrangements FOR UPDATE
  USING (auth.uid()::text = customer_id);

-- Admins can manage all arrangements
CREATE POLICY "Admins can manage all arrangements"
  ON arrangements FOR ALL
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Payments policies
-- Users can view payments for their arrangements
CREATE POLICY "Users can view payments for their arrangements"
  ON payments FOR SELECT
  USING (
    (SELECT customer_id FROM arrangements WHERE id = arrangement_id) = auth.uid()::text
    OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin')
  );

-- Only admins can create and update payments
CREATE POLICY "Only admins can manage payments"
  ON payments FOR INSERT
  WITH CHECK ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can update payments"
  ON payments FOR UPDATE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Documents policies
-- Users can view their own documents
CREATE POLICY "Users can view own documents"
  ON documents FOR SELECT
  USING (
    auth.uid()::text = customer_id 
    OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin')
  );

-- Users can upload their own documents
CREATE POLICY "Users can upload own documents"
  ON documents FOR INSERT
  WITH CHECK (auth.uid()::text = customer_id);

-- Users can delete their own documents
CREATE POLICY "Users can delete own documents"
  ON documents FOR DELETE
  USING (auth.uid()::text = customer_id);

-- Staff table policies - read only for authenticated users
CREATE POLICY "Authenticated users can view staff"
  ON staff FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins can manage staff
CREATE POLICY "Only admins can manage staff"
  ON staff FOR INSERT
  WITH CHECK ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can update staff"
  ON staff FOR UPDATE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can delete staff"
  ON staff FOR DELETE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Staff assignments policies
CREATE POLICY "Authorized users can view staff assignments"
  ON staff_assignments FOR SELECT
  USING (
    (SELECT customer_id FROM arrangements WHERE id = arrangement_id) = auth.uid()::text
    OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin')
  );

CREATE POLICY "Only admins can manage staff assignments"
  ON staff_assignments FOR INSERT
  WITH CHECK ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

CREATE POLICY "Only admins can delete staff assignments"
  ON staff_assignments FOR DELETE
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));

-- Messages policies
-- Users can view messages sent to them
CREATE POLICY "Users can view own messages"
  ON messages FOR SELECT
  USING (
    auth.uid()::text = receiver_id
    OR (SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin')
  );

-- System can create messages (via server actions)
CREATE POLICY "Authenticated users can receive messages"
  ON messages FOR INSERT
  WITH CHECK (true);

-- Audit logs policies - only admins can view
CREATE POLICY "Only admins can view audit logs"
  ON audit_logs FOR SELECT
  USING ((SELECT role FROM users WHERE id = auth.uid()::text) IN ('admin', 'super_admin'));
