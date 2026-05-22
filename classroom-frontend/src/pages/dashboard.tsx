import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Bell
} from "lucide-react";

export function DashboardPage() {
  const stats = [
    { title: "Enrolled Courses", value: "6", description: "2 completed this semester", icon: BookOpen, color: "text-blue-500 bg-blue-500/10" },
    { title: "Average Grade", value: "94.2%", description: "Top 5% of the batch", icon: Award, color: "text-amber-500 bg-amber-500/10" },
    { title: "Study Hours", value: "32.5h", description: "+4.2 hours this week", icon: Clock, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Pending Assignments", value: "4", description: "2 due this week", icon: Calendar, color: "text-rose-500 bg-rose-500/10" },
  ];

  const courses = [
    { name: "Advanced Database Systems", teacher: "Dr. Angela Yu", progress: 78, category: "Computer Science", grade: "A" },
    { name: "Full-Stack Web Development", teacher: "Prof. David Malan", progress: 92, category: "Software Engineering", grade: "A+" },
    { name: "Introduction to AI & Machine Learning", teacher: "Dr. Andrew Ng", progress: 45, category: "Artificial Intelligence", grade: "B+" },
  ];

  const upcomingDeadlines = [
    { title: "DBMS Term Paper Submission", course: "Advanced Database Systems", due: "Tomorrow, 11:59 PM", type: "Project" },
    { title: "React & Refine Dashboard Build", course: "Full-Stack Web Development", due: "May 25, 2026", type: "Lab" },
    { title: "Neural Networks Quiz", course: "Introduction to AI", due: "May 28, 2026", type: "Quiz" },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what is happening with your virtual classroom learning today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="h-9 px-3 py-1 flex items-center gap-1.5 font-medium border-border/80">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            GPA: 3.92
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-border/65 bg-card/50 backdrop-blur-md transition-all hover:shadow-md hover:border-border">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
                <div className={`p-3.5 rounded-2xl ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Section */}
      <div className="grid gap-6 md:grid-cols-6">
        {/* Enrolled Courses */}
        <Card className="col-span-1 md:col-span-4 border-border/65 bg-card/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Active Classrooms
              </CardTitle>
              <CardDescription>Track your academic progress across enrolled courses</CardDescription>
            </div>
            <button className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </CardHeader>
          <CardContent className="space-y-5 pt-4">
            {courses.map((course) => (
              <div key={course.name} className="p-4 rounded-xl border border-border/50 bg-background/50 space-y-3 hover:border-border transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" className="mb-1 text-[10px] font-bold tracking-wide uppercase px-2 py-0.5">
                      {course.category}
                    </Badge>
                    <h3 className="font-semibold text-base leading-snug">{course.name}</h3>
                    <p className="text-xs text-muted-foreground">Instructor: {course.teacher}</p>
                  </div>
                  <Badge variant="outline" className="text-xs font-bold border-emerald-500/20 text-emerald-500 bg-emerald-500/5">
                    Grade: {course.grade}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-muted-foreground">Course Completion</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines & Tasks */}
        <Card className="col-span-1 md:col-span-2 border-border/65 bg-card/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Bell className="h-5 w-5 text-rose-500" />
              Deadlines
            </CardTitle>
            <CardDescription>Upcoming assignments and assessments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.title} className="p-3.5 rounded-xl border border-border/40 bg-background/30 space-y-2 hover:border-border transition-all">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-semibold text-sm line-clamp-1 flex-1 leading-tight">{deadline.title}</span>
                  <Badge className="text-[9px] font-extrabold uppercase px-1.5 py-0">
                    {deadline.type}
                  </Badge>
                </div>
                <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
                  <span className="line-clamp-1">{deadline.course}</span>
                  <span className="font-medium text-rose-500 flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" /> Due {deadline.due}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
