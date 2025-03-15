
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, UserPlus, Edit, Trash2, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
};

const AdminUserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'student'>('student');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'admin' | 'student'>('student');
  const [inviteMessage, setInviteMessage] = useState('');
  const [openNewUserDialog, setOpenNewUserDialog] = useState(false);
  const [openInviteDialog, setOpenInviteDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load users from localStorage
    loadUsers();
  }, []);

  const loadUsers = () => {
    try {
      // Get the current admin user
      const currentUserString = localStorage.getItem('adorziaUser');
      let currentUser: User | null = null;
      
      if (currentUserString) {
        currentUser = JSON.parse(currentUserString);
      }
      
      // Get all users from localStorage
      const allUsers: User[] = [];
      
      // Add mock users (in a real app, this would come from a database)
      if (currentUser) {
        allUsers.push({
          id: '1',
          name: currentUser.name,
          email: currentUser.email,
          role: currentUser.role as 'admin' | 'student'
        });
      }
      
      // Add some demo users
      if (allUsers.length === 1) {
        allUsers.push(
          {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'student'
          },
          {
            id: '3',
            name: 'Bob Johnson',
            email: 'bob@example.com',
            role: 'student'
          }
        );
      }
      
      setUsers(allUsers);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleAddUser = () => {
    if (!newUserName || !newUserEmail || !newUserPassword) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all required fields.",
      });
      return;
    }

    // Create a new user
    const newUser: User = {
      id: Date.now().toString(),
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
    };

    // Add user to the list
    setUsers([...users, newUser]);

    // In a real app, this would be saved to a database
    toast({
      title: "User added",
      description: `${newUserName} has been added as a ${newUserRole}.`,
    });

    // Reset form
    setNewUserName('');
    setNewUserEmail('');
    setNewUserPassword('');
    setNewUserRole('student');
    setOpenNewUserDialog(false);
  };

  const handleSendInvite = () => {
    if (!inviteEmail || !inviteRole) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill in all required fields.",
      });
      return;
    }

    // In a real app, this would send an invitation email
    toast({
      title: "Invitation sent",
      description: `An invitation has been sent to ${inviteEmail} to join as a ${inviteRole}.`,
    });

    // Reset form
    setInviteEmail('');
    setInviteRole('student');
    setInviteMessage('');
    setOpenInviteDialog(false);
  };

  const handleDeleteUser = (userId: string) => {
    // Remove user from the list
    setUsers(users.filter(user => user.id !== userId));

    // In a real app, this would remove the user from the database
    toast({
      title: "User removed",
      description: "The user has been removed.",
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>User Management</CardTitle>
        <div className="flex space-x-2">
          <Dialog open={openNewUserDialog} onOpenChange={setOpenNewUserDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new user account with specified permissions.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Name</label>
                  <Input
                    className="col-span-3"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Email</label>
                  <Input
                    className="col-span-3"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Password</label>
                  <Input
                    className="col-span-3"
                    type="password"
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    placeholder="Set initial password"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Role</label>
                  <Select 
                    value={newUserRole} 
                    onValueChange={(value) => setNewUserRole(value as 'admin' | 'student')}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddUser}>Add User</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={openInviteDialog} onOpenChange={setOpenInviteDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite New User</DialogTitle>
                <DialogDescription>
                  Send an invitation email to join the platform.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Email</label>
                  <Input
                    className="col-span-3"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Role</label>
                  <Select 
                    value={inviteRole} 
                    onValueChange={(value) => setInviteRole(value as 'admin' | 'student')}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Message</label>
                  <Textarea
                    className="col-span-3"
                    value={inviteMessage}
                    onChange={(e) => setInviteMessage(e.target.value)}
                    placeholder="Optional invitation message"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSendInvite}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Invitation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.role === 'admin' 
                      ? 'bg-adorzia-primary text-white' 
                      : 'bg-adorzia-lightGray text-adorzia-darkGray'
                  }`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminUserManagement;
