---
title: MultiTreading
---
### Multi Tasking

    Process-based Multitasking (Multiprocessing) - (Seperate memory is allocated hence slower)
    Thread-based Multitasking (Multithreading) -  (Same memory pool is pused hence faster performance)


### Stages in MultiTreading

    New
    Active(Runnable and Running)
    Blocked / Waiting (waiting for some external device to be availanble like printer)
    Timed Waiting (Thread.Sleep())
    Terminated:waiting

### MultiTreading can be achived using
1. Extending the Thread class and overiding the run methods
2. Implementing the Runnable interface and overriding the run menthod (here you need to create the thread object and pass class object in the thread constructor)

### Thread Scheduler 

### **Definition of Thread Scheduler in Java:**
   - Java's thread scheduler determines which thread to run or wait. It selects threads in the runnable state based on priority and time of arrival.

### **Thread Scheduling Factors:**
   - Threads are chosen based on priority (1 to 10). Higher priority threads have a better chance of being selected. If priorities are the same, the scheduler considers the time of arrival.

### **Priority in Thread Scheduling:**
   - Thread priority ranges from 1 to 10. Higher priority threads are favored by the scheduler, increasing their chances of execution.

### **Time of Arrival in Thread Scheduling:**
   - When threads with the same priority are in the runnable state, the thread scheduler uses their arrival time to decide which thread to process first. The first-arrived thread gets preference.

### **First Come First Serve Scheduling Algorithm:**
   - In this algorithm, threads are processed in the order of their arrival time. The thread that arrives first is executed first, followed by others in chronological order.

### **Time-slicing Scheduling:**
   - Utilizes time slices to prevent infinite blocking (starvation) in the First Come First Serve algorithm.
   - Threads are given specific time slices, allowing each thread to run for a defined period before yielding the CPU.

### **Preemptive-Priority Scheduling:**
   - Chooses threads based on priority; higher priority threads are selected.
   - Preemptive in nature, providing time slices to avoid starvation.
   - If the highest priority thread hasn't completed its task within the time slice, it relinquishes the CPU due to preemption.

![[Pasted image 20231117184804.png]]

### IMP points about threads 
1. You should not start same thread again or will through IllegalThreadStateException
2. If you run Run() method directly the seperate call stack wont be created. all the treads will run one after the other as it call stack is same. thread scheduler wont be able to pick up the threads for execution. they will execute one after the other.

```Java
		// Current Thread
		System.out.println("main Thread Name : " + Thread.currentThread().getName());

		// create Thread using Runnable Interface
		Runnable r1 = new RunnableClass();
		Thread t1 = new Thread(r1, "Thread 1");
		t1.start();

		// Create Thread using Thread class
		Thread t2 = new ThreadClass("Thread 2");
		t2.start();

		// Current Thread
		System.out.println("main Thread Name : " + Thread.currentThread().getName());

```
### priority
1. Priority is form 1 to 10


    public static int MIN_PRIORITY
    public static int NORM_PRIORITY
    public static int MAX_PRIORITY

Default priority of a thread is 5 (NORM_PRIORITY). The value of MIN_PRIORITY is 1 and the value of MAX_PRIORITY is 10.

### Deamon Thread

1. **Definition:**
   - A daemon thread is a background thread that runs intermittently in the background and provides services to user threads.
   - They are used for tasks such as garbage collection or monitoring.

2. **Setting Daemon Status:**
   - You can set a thread as a daemon by calling the `setDaemon(true)` method before starting the thread.

3. **Automatic Termination:**
   - Daemon threads are automatically terminated when all user threads (non-daemon threads) finish their execution. They do not prevent the program from exiting if there are no non-daemon threads running.

4. **Example:**
   - ```java
     Thread daemonThread = new Thread(() -> {
         // Daemon thread logic
     });
     daemonThread.setDaemon(true); // Set as daemon thread
     daemonThread.start(); // Start the thread
     ```

It's important to note that daemon threads should be used for tasks that can be safely abandoned if the program is exiting. Always refer to the latest Java documentation for any updates or changes in the usage of daemon threads.

### Thread pool
```java
  ExecutorService executor = Executors.newFixedThreadPool(5);
  executor.execute(ThreadClassObject)

```
newFixedThreadPool(int s): The method creates a thread pool of the fixed size s.

newCachedThreadPool(): The method creates a new thread pool that creates the new threads when needed but will still use the previously created thread whenever they are available to use.

newSingleThreadExecutor(): The method creates a new thread.

### Thread Group 
ThreadGroup tg1 = new ThreadGroup("Group A");   
Thread t1 = new Thread(tg1,new MyRunnable(),"one");     
Thread t2 = new Thread(tg1,new MyRunnable(),"two");     
Thread t3 = new Thread(tg1,new MyRunnable(),"three");

Now we can interrupt all threads by a single line of code only.

    Thread.currentThread().getThreadGroup().interrupt();

### Shutdown Hook

```java
Runtime r=Runtime.getRuntime();    
r.addShutdownHook(new MyThread());
```

### garbage collection
1) By nulling a reference:

    Employee e=new Employee();  
    e=null;  

2) By assigning a reference to another:

    Employee e1=new Employee();  
    Employee e2=new Employee();  
    e1=e2;//now the first object referred by e1 is available for garbage collection  

3) By anonymous object:

    new Employee();  

finalize() method

The finalize() method is invoked each time before the object is garbage collected. This method can be used to perform cleanup processing. This method is defined in Object class as:

    protected void finalize(){}  

Note: The Garbage collector of JVM collects only those objects that are created by new keyword. So if you have created any object without new, you can use finalize method to perform cleanup processing (destroying remaining objects).
gc() method

The gc() method is used to invoke the garbage collector to perform cleanup processing. The gc() is found in System and Runtime classes.

    public static void gc(){}  
System.gc()

Note: Garbage collection is performed by a daemon thread called Garbage Collector(GC). This thread calls the finalize() method before object is garbage collected.

### Java Runtime class

Java Runtime class is used to interact with java runtime environment. Java Runtime class provides methods to execute a process, invoke GC, get total and free memory etc. There is only one instance of java.lang.Runtime class is available for one java application.

The Runtime.getRuntime() method returns the singleton instance of Runtime class.

### Syncronization
Synchronization in Java is the capability to control the access of multiple threads to any shared resource.

Java Synchronization is better option where we want to allow only one thread to access the shared resource.


    Process Synchronization
    Thread Synchronization

### Thread Synchronization

There are two types of thread synchronization mutual exclusive and inter-thread communication.

    Mutual Exclusive
        Synchronized method.
        Synchronized block.
        Static synchronization.
    Cooperation (Inter-thread communication in java)


### Syncronization Lock
Synchronization is built around an internal entity known as the lock or monitor. Every object has a lock associated with it. By convention, a thread that needs consistent access to an object's fields has to acquire the object's lock before accessing them, and then release the lock when it's done with them.

### methods
public synchronized void methodNamr(){}
### Block
synchronized(ObjectReference){ }
### Static Syncronization
Yet to learn
### DeadLock
basic understanding
### Inter-thread Communication in java
    wait()
    notify()
    notifyAll()

