export const questions = [
    {
        "question": "Which component of the node is responsible to run workloads?",
        "answer_options": [
            "The kubelet",
            "The kubeproxy",
            "The kube-apiserver",
            "The container runtime"
        ],
        "correct_answers": ["The container runtime"],
        "section": null,
        "explanation": "D.The container runtime."
    },
    {
        "question": "Which API object is the recommended way to run a scalable, stateless application on your cluster?",
        "answer_options": [
            "ReplicaSet",
            "Deployment",
            "DaemonSet",
            "Pod"
        ],
        "correct_answers": ["Deployment"],
        "section": null,
        "explanation": "Selected Answer: B"
    },
    {
        "question": "A CronJob is scheduled to run by a user every one hour. What happens in the cluster when it's time for this CronJob to run?",
        "answer_options": [
            "Kubelet watches API Server for CronJob objects. When it's time for a Job to run, it runs the Pod directly.",
            "Kube-scheduler watches API Server for CronJob objects, and this is why it's called kube-scheduler.",
            "CronJob controller component creates a Pod and waits until it finishes to run.",
            "CronJob controller component creates a Job. Then the Job controller creates a Pod and waits until it finishes to run."
        ],
        "correct_answers": ["CronJob controller component creates a Job. Then the Job controller creates a Pod and waits until it finishes to run."],
        "section": null,
        "explanation": "Selected Answer: D"
    },
    {
        "question": "What is the purpose of the kubelet component within a Kubernetes cluster?",
        "answer_options": [
            "A dashboard for Kubernetes Clusters that allows management and troubleshooting of applications.",
            "A network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.",
            "A component that watches for newly created Pods with no assigned node, and selects a node for them to run on.",
            "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod."
        ],
        "correct_answers": ["An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod."],
        "section": null,
        "explanation": "Selected Answer: D"
    },
    {
        "question": "What is the default value for authorization-mode in Kubernetes API server?",
        "answer_options": [
            "--authorization-mode=RBAC",
            "--authorization-mode=AlwaysAllow",
            "--authorization-mode=AlwaysDeny",
            "--authorization-mode=ABAC"
        ],
        "correct_answers": ["--authorization-mode=AlwaysAllow"],
        "section": null,
        "explanation": null
    },
    {
        "question": "Let's assume that an organization needs to process large amounts of data in bursts, on a cloud-based Kubernetes cluster. For instance: each Monday morning, they need to run a batch of 1000 compute jobs of 1 hour each, and these jobs must be completed by Monday night. What's going to be the most cost-effective method?",
        "answer_options": [
            "A. Run a group of nodes with the exact required size to complete the batch on time, and use a combination of taints, tolerations, and nodeSelectors to reserve these nodes to the batch jobs.",
            "B. Leverage the Kubernetes Cluster Autoscaler to automatically start and stop nodes as they're needed.",
            "C. Commit to a specific level of spending to get discounted prices (with e.g. “reserved instances” or similar mechanisms).",
            "D. Use PriorityСlasses so that the weekly batch job gets priority over other workloads running on the cluster, and can be completed on time."
        ],
        "correct_answers": ["B. Leverage the Kubernetes Cluster Autoscaler to automatically start and stop nodes as they're needed."],
        "section": null,
        "explanation": null
    },
    {
        "question": "What is a Kubernetes service with no cluster IP address called?",
        "answer_options": [
            "Headless Service",
            "Nodeless Service",
            "IPLess Service",
            "Specless Service"
        ],
        "correct_answers": ["Headless Service"],
        "section": null,
        "explanation": "Selected Answer: A"
    },
    {
        "question": "CI/CD stands for:",
        "answer_options": [
            "Continuous Information / Continuous Development",
            "Continuous Integration / Continuous Development",
            "Cloud Integration / Cloud Development",
            "Continuous Integration / Continuous Deployment"
        ],
        "correct_answers": ["Continuous Integration / Continuous Deployment"],
        "section": null,
        "explanation": null
    },
    {
        "question": "What default level of protection is applied to the data in Secrets in the Kubernetes API?",
        "answer_options": [
            "The values use AES Symmetric Encryption",
            "The values are stored in plain text",
            "The values are encoded with SHA256 hashes",
            "The values are base64 encoded"
        ],
        "correct_answers": ["The values are base64 encoded"],
        "section": null,
        "explanation": "Selected Answer: D"
    },
    {
        "question": "What function does kube-proxy provide to a cluster?",
        "answer_options": [
            "A. Implementing the Ingress resource type for application traffic.",
            "B. Forwarding data to the correct endpoints for Services.",
            "C. Managing data egress from the cluster nodes to the network.",
            "D. Managing access to the Kubernetes API."
        ],
        "correct_answers": ["B. Forwarding data to the correct endpoints for Services."],
        "section": null,
        "explanation": null
    },
    {
        "question": "How long should a stable API element in Kubernetes be supported (at minimum) after deprecation?",
        "answer_options": [
            "9 months",
            "24 months",
            "12 months",
            "6 months"
        ],
        "correct_answers": ["12 months"],
        "section": null,
        "explanation": null
    },
    {
        "question": "What is the name of the lightweight Kubernetes distribution built for IoT and edge computing?",
        "answer_options": [
            "OpenShift",
            "k3s",
            "RKE",
            "k1s"
        ],
        "correct_answers": ["k3s"],
        "section": null,
        "explanation": null
    },
    {
        "question": "Kubernetes ___ allows you to automatically manage the number of nodes in your cluster to meet demand.",
        "answer_options": [
            "Node Autoscaler",
            "Cluster Autoscaler",
            "Horizontal Pod Autoscaler",
            "Vertical Pod Autoscaler"
        ],
        "correct_answers": ["Cluster Autoscaler"],
        "section": null,
        "explanation": null
    },
    {
        "question": "Which of the following statements is correct concerning Open Policy Agent (OPA)?",
        "answer_options": [
            "The policies must be written in Python language.",
            "Kubernetes can use it to validate requests and apply policies.",
            "Policies can only be tested when published.",
            "It cannot be used outside Kubernetes."
        ],
        "correct_answers": ["Kubernetes can use it to validate requests and apply policies."],
        "section": null,
        "explanation": null
    },
    {
        "question": "In a cloud native world, what does the IaC abbreviation stands for?",
        "answer_options": [
            "Infrastructure and Code",
            "Infrastructure as Code",
            "Infrastructure above Code",
            "Infrastructure across Code"
        ],
        "correct_answers": ["Infrastructure as Code"],
        "section": null,
        "explanation": null
    },
    {
        "question": "In which framework do the developers no longer have to deal with capacity, deployments, scaling and fault tolerance, and OS?",
        "answer_options": [
            "Docker Swam",
            "Kubernetes",
            "Mesos",
            "Serverless"
        ],
        "correct_answers": ["Serverless"],
        "section": null,
        "explanation": "Selected Answer: B"
    },
    {
        "question": "Which of the following characteristics is associated with container orchestration?",
        "answer_options": [
            "Application message distribution",
            "Dynamic scheduling",
            "Deploying application JAR files",
            "Virtual Machine distribution"
        ],
        "correct_answers": ["Dynamic scheduling"],
        "section": null,
        "explanation": "Selected Answer: B"
    },
    {
        "question": "Which of the following workload require a headless service while deploying into the namespace?",
        "answer_options": [
            "StatefulSet",
            "CronJob",
            "Deployment",
            "DaemonSet"
        ],
        "correct_answers": ["StatefulSet"],
        "section": null,
        "explanation": "Selected Answer: A"
    },
    {
        "question": "What is Helm?",
        "answer_options": [
            "An open source dashboard for Kubernetes.",
            "A package manager for Kubernetes applications.",
            "A custom scheduler for Kubernetes.",
            "An end to end testing project for Kubernetes applications."
        ],
        "correct_answers": ["A package manager for Kubernetes applications."],
        "section": null,
        "explanation": "Selected Answer: B"
    },
    {
        "question": "How to load and generate data required before the Pod startup?",
        "answer_options": [
            "Use an init container with shared file storage.",
            "Use a PVC volume.",
            "Use a sidecar container with shared volume.",
            "Use another pod with a PVC."
        ],
        "correct_answers": ["Use an init container with shared file storage."],
        "section": null,
        "explanation": "Selected Answer:\u00a0"
    },
    {
        "question": "Which is the correct kubectl command to display logs in real time?",
        "answer_options": [
            "A. kubectl logs -p test-container-1",
            "B. kubectl logs -c test-container-1",
            "C. kubectl logs -l test-container-1",
            "D. kubectl logs -f test-container-1"
        ],
        "correct_answers": ["D. kubectl logs -f test-container-1"]
    },
    {
        "question": "What is the core functionality of GitOps tools like Argo CD and Flux?",
        "answer_options": [
            "A. They track production changes made by a human in a Git repository and generate a human-readable audit trail.",
            "B. They replace human operations with an agent that tracks Git commands.",
            "C. They automatically create pull requests when dependencies are outdated.",
            "D. They continuously compare the desired state in Git with the actual production state and notify or act upon differences."
        ],
        "correct_answers": ["D. They continuously compare the desired state in Git with the actual production state and notify or act upon differences."]
    },
    {
        "question": "Which Kubernetes resource workload ensures that all (or some) nodes run a copy of a Pod?",
        "answer_options": [
            "ReplicaSet",
            "StatefulSet",
            "DaemonSet",
            "Deployment"
        ],
        "correct_answers": ["DaemonSet"]
    },
    {
        "question": "We can extend the Kubernetes API with Kubernetes API Aggregation Layer and CRDs. What is CRD?",
        "answer_options": [
            "Custom Resource Definition",
            "Custom Restricted Definition",
            "Customized RUST Definition",
            "Custom RUST Definition"
        ],
        "correct_answers": ["Custom Resource Definition"]
    },
    {
        "question": "The Kubernetes project work is carried primarily by SIGs. What does SIG stand for?",
        "answer_options": [
            "Special Interest Group",
            "Software Installation Guide",
            "Support and Information Group",
            "Strategy Implementation Group"
        ],
        "correct_answers": ["Special Interest Group"]
    },
    {
        "question": "What is the order of 4C’s in Cloud Native Security, starting with the layer that a user has the most control over?",
        "answer_options": [
            "Cloud -> Container -> Cluster -> Code",
            "Container -> Cluster -> Code -> Cloud",
            "Cluster -> Container -> Code -> Cloud",
            "Code -> Container -> Cluster -> Cloud"
        ],
        "correct_answers": ["Code -> Container -> Cluster -> Cloud"]
    },
    {
        "question": "Which group of container runtimes provides additional sandboxed isolation and elevated security?",
        "answer_options": [
            "rune, cgroups",
            "docker, containerd",
            "runsc, kata",
            "crun, cri-o"
        ],
        "correct_answers": ["runsc, kata"]
    },
    {
        "question": "What is the common standard for Service Meshes?",
        "answer_options": [
            "Service Mesh Specification (SMS)",
            "Service Mesh Technology (SMT)",
            "Service Mesh Interface (SMI)",
            "Service Mesh Function (SMF)"
        ],
        "correct_answers": ["Service Mesh Interface (SMI)"]
    },
    {
        "question": "Which statement about Ingress is correct?",
        "answer_options": [
            "Ingress provides a simple way to track network endpoints within a cluster.",
            "Ingress is a Service type like NodePort and ClusterIP.",
            "Ingress is a construct that allows you to specify how a Pod is allowed to communicate.",
            "Ingress exposes routes from outside the cluster to services in the cluster."
        ],
        "correct_answers": ["Ingress exposes routes from outside the cluster to services in the cluster."]
    },
    {
        "question": "What best describes cloud native service discovery?",
        "answer_options": [
            "A. It's a mechanism for applications and microservices to locate each other on a network.",
            "B. It's a procedure for discovering a MAC address, associated with a given IP address.",
            "C. It's used for automatically assigning IP addresses to devices connected to the network.",
            "D. It's a protocol that turns human-readable domain names into IP addresses on the Internet."
        ],
        "correct_answers": ["A. It's a mechanism for applications and microservices to locate each other on a network."]
    },
    {
        "question": "What components are common in a service mesh?",
        "answer_options": [
            "A. tracing and log storage",
            "B. circuit breaking and Pod scheduling",
            "C. data plane and runtime plane",
            "D. service proxy and control plane"
        ],
        "correct_answers": ["D. service proxy and control plane"]
    },
    {
        "question": "Which storage operator in Kubernetes can help the system to self-scale, self-heal, etc?",
        "answer_options": [
            "A. Rook",
            "B. Kubernetes",
            "C. Helm",
            "D. Container Storage Interface (CSI)"
        ],
        "correct_answers": ["A. Rook"]
    },
    {
        "question": "What fields must exist in any Kubernetes object (e.g. YAML) file?",
        "answer_options": [
            "A. apiVersion, kind, metadata",
            "B. kind, namespace, data",
            "C. apiVersion, metadata, namespace",
            "D. kind, metadata, data"
        ],
        "correct_answers": ["A. apiVersion, kind, metadata"]
    },
    {
        "question": "Which of the following would fall under the responsibilities of an SRE?",
        "answer_options": [
            "A. Developing a new application feature.",
            "B. Creating a monitoring baseline for an application.",
            "C. Submitting a budget for running an application in a cloud.",
            "D. Writing policy on how to submit a code change."
        ],
        "correct_answers": ["B. Creating a monitoring baseline for an application."]
    },
    {
        "question": "What are the initial namespaces that Kubernetes starts with?",
        "answer_options": [
            "default, kube-system, kube-public, kube-node-lease",
            "default, system, kube-public",
            "kube-default, kube-system, kube-main, kube-node-lease",
            "kube-default, system, kube-main, kube-primary"
        ],
        "correct_answers": ["default, kube-system, kube-public, kube-node-lease"]
    },
    {
        "question": "What is a probe within Kubernetes?",
        "answer_options": [
            "A. A monitoring mechanism of the Kubernetes API.",
            "B. A pre-operational scope issued by the kubectl agent.",
            "C. A diagnostic performed periodically by the kubelet on a container.",
            "D. A logging mechanism of the Kubernetes API."
        ],
        "correct_answers": ["C. A diagnostic performed periodically by the kubelet on a container."]
    },
    {
        "question": "Which Kubernetes feature would you use to guard against split brain scenarios with your distributed application?",
        "answer_options": [
            "Replication controllers",
            "Consensus protocols",
            "Rolling updates",
            "StatefulSet"
        ],
        "correct_answers": ["StatefulSet"]
    },
    {
        "question": "What feature must a CNI support to control specific traffic flows for workloads running in Kubernetes?",
        "answer_options": [
            "Border Gateway Protocol",
            "IP Address Management",
            "Pod Security Policy",
            "Network Policies"
        ],
        "correct_answers": ["Network Policies"]
    },
    {
        "question": "What is the main role of the Kubernetes DNS within a cluster?",
        "answer_options": [
            "Acts as a DNS server for virtual machines that are running outside the cluster.",
            "Provides a DNS as a Service, allowing users to create zones and registries for domains that they own.",
            "Allows Pods running in dual stack to convert IPv6 calls into IPv4 calls.",
            "Provides consistent DNS Names for Pods and Services for workloads that need to communicate with each other."
        ],
        "correct_answers": ["Provides consistent DNS Names for Pods and Services for workloads that need to communicate with each other."]
    },
    {
        "question": "Scenario: You have a Kubernetes cluster hosted in a public cloud provider. When trying to create a Service of type LoadBalancer, the external-ip is stuck in the \"Pending\" state. Which Kubernetes component is failing in this scenario?",
        "answer_options": [
            "Cloud Controller Manager",
            "Load Balancer Manager",
            "Cloud Architecture Manager",
            "Cloud Load Balancer Manager"
        ],
        "correct_answers": ["Cloud Controller Manager"]
    },
    {
        "question": "What are the characteristics for building every cloud-native application?",
        "answer_options": [
            "A. Resiliency, Operability, Observability, Availability",
            "B. B. Resiliency, Containerd, Observability, Agility",
            "C. C. Kubernetes, Operability, Observability, Availability",
            "D. D. Resiliency, Agility, Operability, Observability"
        ],
        "correct_answers": ["D. D. Resiliency, Agility, Operability, Observability"]
    },
    {
        "question": "What does CNCF stand for?",
        "answer_options": [
            "A. Cloud Native Community Foundation",
            "B. B. Cloud Native Computing Foundation",
            "C. C. Cloud Neutral Computing Foundation",
            "D. D. Cloud Neutral Community Foundation"
        ],
        "correct_answers": ["B. B. Cloud Native Computing Foundation"]
    },
    {
        "question": "Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called:",
        "answer_options": [
            "namespaces",
            "containers",
            "hypervisors",
            "cgroups"
        ],
        "correct_answers": ["namespaces"]
    },
    {
        "question": "What component enables end users, different parts of the Kubernetes cluster, and external components to communicate with one another?",
        "answer_options": [
            "kubectl",
            "AWS Management Console",
            "Kubernetes API",
            "Google Cloud SDK"
        ],
        "correct_answers": ["Kubernetes API"]
    },
    {
        "question": "Which command will list the resource types that exist within a cluster?",
        "answer_options": [
            "A. kubectl api-resources",
            "B. kubectl get namespaces",
            "C. kubectl api-versions",
            "D. curl https://kubectrl/namespaces"
        ],
        "correct_answers": ["A. kubectl api-resources"]
    },
    {
        "question": "Which of these components is part of the Kubernetes Control Plane?",
        "answer_options": [
            "A. coredns",
            "B. cloud-controller-manager",
            "C. kube-proxy",
            "D. kubelet"
        ],
        "correct_answers": ["B. cloud-controller-manager"]
    },
    {
        "question": "Which of these components is part of the Kubernetes Control Plane?",
        "answer_options": [
            "coredns",
            "cloud-controller-manager",
            "kube-proxy",
            "kubelet"
        ],
        "correct_answers": ["cloud-controller-manager"]
    },
    {
        "question": "What is a key feature of a container network?",
        "answer_options": [
            "A. Proxying REST requests across a set of containers.",
            "B. Allowing containers running on separate hosts to communicate.",
            "C. Allowing containers on the same host to communicate.",
            "D. Caching remote disk access."
        ],
        "correct_answers": ["B. Allowing containers running on separate hosts to communicate."]
    },
    {
        "question": "How can you monitor the progress for an updated Deployment/DaemonSets/StatefulSets?",
        "answer_options": [
            "A. kubectl rollout watch",
            "B. kubectl rollout progress",
            "C. kubectl rollout state",
            "D. kubectl rollout status"
        ],
        "correct_answers": ["D. kubectl rollout status"]
    },
    {
        "question": "What is the goal of load balancing?",
        "answer_options": [
            "A. Automatically measure request performance across instances of an application.",
            "B. Automatically distribute requests across different versions of an application.",
            "C. Automatically distribute instances of an application across the cluster.",
            "D. Automatically distribute requests across instances of an application."
        ],
        "correct_answers": ["D. Automatically distribute requests across instances of an application."]
    },
    {
        "question": "How are ReplicaSets and Deployments related?",
        "answer_options": [
            "A. Deployments manage ReplicaSets and provide declarative updates to Pods.",
            "B. ReplicaSets manage stateful applications, Deployments manage stateless applications.",
            "C. Deployments are runtime instances of ReplicaSets.",
            "D. ReplicaSets are subsets of Jobs and CronJobs which use imperative Deployments."
        ],
        "correct_answers": ["A. Deployments manage ReplicaSets and provide declarative updates to Pods."]
    },
    {
        "question": "What factors influence the Kubernetes scheduler when it places Pods on nodes?",
        "answer_options": [
            "A. Pod memory requests, node taints, and Pod affinity.",
            "B. Pod labels, node labels, and request labels.",
            "C. Node taints, node level, and Pod priority.",
            "D. Pod priority, container command, and node labels."
        ],
        "correct_answers": ["A. Pod memory requests, node taints, and Pod affinity."]
    },
    {
        "question": "What is the core metric type in Prometheus used to represent a single numerical value that can go up and down?",
        "answer_options": [
            "A. Summary",
            "B. Counter",
            "C. Histogram",
            "D. Gauge"
        ],
        "correct_answers": ["D. Gauge"]
    },
    {
        "question": "What is the primary mechanism to identify grouped objects in a Kubernetes cluster?",
        "answer_options": [
            "A. Custom Resources",
            "B. Labels",
            "C. Label Selector",
            "D. Pod"
        ],
        "correct_answers": ["B. Labels"]
    },
    {
        "question": "What is the name of the Kubernetes resource used to expose an application?",
        "answer_options": [
            "A. Port",
            "B. Service",
            "C. DNS",
            "D. Deployment"
        ],
        "correct_answers": ["B. Service"]
    },
    {
        "question": "What is a DaemonSet?",
        "answer_options": [
            "A. It's a type of workload that ensures a specific set of nodes run a copy of a Pod.",
            "B. It's a type of workload responsible for maintaining a stable set of replica Pods running in any node.",
            "C. It's a type of workload that needs to be run periodically on a given schedule.",
            "D. It's a type of workload that provides guarantees about ordering, uniqueness, and identity of a set of Pods."
        ],
        "correct_answers": ["A. It's a type of workload that ensures a specific set of nodes run a copy of a Pod."]
    },
    {
        "question": "What is the telemetry component that represents a series of related distributed events that encode the end-to-end request flow through a distributed system?",
        "answer_options": [
            "Metrics",
            "Logs",
            "Spans",
            "Traces"
        ],
        "correct_answers": ["Traces"]
    },
    {
        "question": "In the Kubernetes platform, which component is responsible for running containers?",
        "answer_options": [
            "etcd",
            "CRI-O",
            "cloud-controller-manager",
            "kube-controller-manager"
        ],
        "correct_answers": ["CRI-O"]
    },
    {
        "question": "Services and Pods in Kubernetes are ______ objects.",
        "answer_options": [
            "JSON",
            "YAML",
            "Java",
            "REST"
        ],
        "correct_answers": ["REST"]
    },
    {
        "question": "What Kubernetes component handles network communications inside and outside of a cluster, using operating system packet filtering if available?",
        "answer_options": [
            "A. kube-proxy",
            "B. kubelet",
            "C. etcd",
            "D. kube-controller-manager"
        ],
        "correct_answers": ["A. kube-proxy"]
    },
    {
        "question": "What Kubernetes control plane component exposes the programmatic interface used to create, manage and interact with the Kubernetes objects?",
        "answer_options": [
            "A. kube-controller-manager",
            "B. kube-proxy",
            "C. kube-apiserver",
            "D. etcd"
        ],
        "correct_answers": ["C. kube-apiserver"]
    },
    {
        "question": "Which type of Service requires manual creation of Endpoints?",
        "answer_options": [
            "A. LoadBalancer",
            "B. Services without selectors",
            "C. NodePort",
            "D. ClusterIP with selectors"
        ],
        "correct_answers": ["B. Services without selectors"]
    },
    {
        "question": "Which of these commands is used to retrieve the documentation and field definitions for a Kubernetes resource?",
        "answer_options": [
            "A. kubectl explain",
            "B. kubectl api-resources",
            "C. kubectl get --help",
            "D. kubectl show"
        ],
        "correct_answers": ["A. kubectl explain"]
    },
    {
        "question": "Which of the following is a lightweight tool that manages traffic flows between services, enforces access policies, and aggregates telemetry data, all without requiring changes to application code?",
        "answer_options": [
            "NetworkPolicy",
            "Linkerd",
            "kube-proxy",
            "Nginx"
        ],
        "correct_answers": ["Linkerd"]
    },
    {
        "question": "Which Kubernetes resource uses immutable: true boolean field?",
        "answer_options": [
            "Deployment",
            "Pod",
            "ConfigMap",
            "ReplicaSet"
        ],
        "correct_answers": ["ConfigMap"]
    },
    {
        "question": "Which statement about the Kubernetes network model is correct?",
        "answer_options": [
            "Pods can only communicate with Pods exposed via a Service.",
            "Pods can communicate with all Pods without NAT.",
            "The Pod IP is only visible inside a Pod.",
            "The Service IP is used for the communication between Services."
        ],
        "correct_answers": ["Pods can communicate with all Pods without NAT."]
    },
    {
        "question": "What is the resource type used to package sets of containers for scheduling in a cluster?",
        "answer_options": [
            "Pod",
            "ContainerSet",
            "ReplicaSet",
            "Deployment"
        ],
        "correct_answers": ["Pod"]
    },
    {
        "question": "Can a Kubernetes Service expose multiple ports?",
        "answer_options": [
            "No, you can only expose one port per each Service.",
            "Yes, but you must specify an unambiguous name for each port.",
            "Yes, the only requirement is to use different port numbers.",
            "No, because the only port you can expose is port number 443."
        ],
        "correct_answers": ["Yes, but you must specify an unambiguous name for each port."]
    },
    {
        "question": "Which persona is normally responsible for defining, testing, and running an incident management process?",
        "answer_options": [
            "A. Site Reliability Engineers",
            "B. Project Managers",
            "C. Application Developers",
            "D. Quality Engineers"
        ],
        "correct_answers": ["A. Site Reliability Engineers"]
    },
    {
        "question": "What is the default deployment strategy in Kubernetes?",
        "answer_options": [
            "A. Rolling update",
            "B. Blue/Green deployment",
            "C. Canary deployment",
            "D. Recreate deployment"
        ],
        "correct_answers": ["A. Rolling update"]
    },
    {
        "question": "Which command provides information about the field replicas within the spec resource of a deployment object?",
        "answer_options": [
            "A. kubectl get deployment.spec.replicas",
            "B. kubectl explain deployment.spec.replicas",
            "C. kubectl describe deployment.spec.replicas",
            "D. kubectl explain deployment --spec.replicas"
        ],
        "correct_answers": ["B. kubectl explain deployment.spec.replicas"]
    },
    {
        "question": "Which of the following is a responsibility of the governance board of an open source project?",
        "answer_options": [
            "A. Decide about the marketing strategy of the project.",
            "B. Review the pull requests in the main branch.",
            "C. Outline the project's “terms of engagement”.",
            "D. Define the license to be used in the project."
        ],
        "correct_answers": ["C. Outline the project's “terms of engagement”."]
    },
    {
        "question": "What is the role of a NetworkPolicy in Kubernetes?",
        "answer_options": [
            "A. The ability to cryptic and obscure all traffic.",
            "B. The ability to classify the Pods as isolated and non isolated.",
            "C. The ability to prevent loopback or incoming host traffic.",
            "D. The ability to log network security events."
        ],
        "correct_answers": ["B. The ability to classify the Pods as isolated and non isolated."]
    },
    {
        "question": "What are the most important resources to guarantee the performance of an etcd cluster?",
        "answer_options": [
            "A. CPU and disk capacity.",
            "B. Network throughput and disk I/O.",
            "C. CPU and RAM memory.",
            "D. Network throughput and CPU."
        ],
        "correct_answers": ["B. Network throughput and disk I/O."]
    },
    {
        "question": "How do you deploy a workload to Kubernetes without additional tools?",
        "answer_options": [
            "Create a Bash script and run it on a worker node.",
            "Create a Helm Chart and install it with helm.",
            "Create a manifest and apply it with kubectl.",
            "Create a Python script and run it with kubectl."
        ],
        "correct_answers": ["Create a manifest and apply it with kubectl."]
    },
    {
        "question": "How do you perform a command in a running container of a Pod?",
        "answer_options": [
            "A. kubectl exec -",
            "B. docker exec",
            "C. kubectl run -",
            "D. kubectl attach -i"
        ],
        "correct_answers": ["A. kubectl exec -"]
    },
    {
        "question": "How to create a headless service?",
        "answer_options": [
            "A. By specifying .spec.ClusterIP: headless",
            "B. By specifying .spec.clusterIP: None",
            "C. By specifying .spec.ClusterIP: 0.0.0.0",
            "D. By specifying .spec.ClusterIP: localhost"
        ],
        "correct_answers": ["B. By specifying .spec.clusterIP: None"]
    },
    {
        "question": "How does dynamic storage provisioning work?",
        "answer_options": [
            "A. A user requests dynamically provisioned storage by including an existing storage class in their PersistentVolumeClaim.",
            "B. An administrator creates a storage class and includes it in their pod YAML definition file without creating a PersistentVolumeClaim.",
            "C. A pod requests dynamically provisioned storage by including a storage class and the pod name in their PersistentVolumeClaim.",
            "D. An administrator creates a PersistentVolume and includes the name of the PersistentVolume in their pod YAML definition file."
        ],
        "correct_answers": ["A. A user requests dynamically provisioned storage by including an existing storage class in their PersistentVolumeClaim."]
    },
    {
        "question": "Which of the following are tasks performed by a container orchestration tool?",
        "answer_options": [
            "A. Schedule, scale, and manage the health of containers.",
            "B. Create images, scale, and manage the health of containers.",
            "C. Debug applications, and manage the health of containers.",
            "D. Store images, scale, and manage the health of containers."
        ],
        "correct_answers": ["A. Schedule, scale, and manage the health of containers."]
    },
    {
        "question": "Which of the following is a definition of Hybrid Cloud?",
        "answer_options": [
            "A. An architecture that uses a combination of services running in public and private data centers, only including data centers from the same cloud provider.",
            "B. A cloud native architecture that uses a combination of services running in public clouds, excluding data centers in different availability zones.",
            "C. A cloud native architecture that uses a combination of services running in different public and private clouds, including on-premises data centers.",
            "D. An architecture that uses a combination of services running in public and private data centers, excluding serverless functions."
        ],
        "correct_answers": ["C. A cloud native architecture that uses a combination of services running in different public and private clouds, including on-premises data centers."]
    },
    {
        "question": "What is a Kubernetes Service Endpoint?",
        "answer_options": [
            "A. It is the API Endpoint of our Kubernetes cluster.",
            "B. It is a name of special Pod in kube-system namespace.",
            "C. It is an IP address that we can access from the Internet.",
            "D. It is an object that gets IP addresses of individual Pods assigned to it."
        ],
        "correct_answers": ["D. It is an object that gets IP addresses of individual Pods assigned to it."]
    },
    {
        "question": "Why is Cloud-Native Architecture important?",
        "answer_options": [
            "A. Cloud Native Architecture revolves around containers, microservices and pipelines.",
            "B. Cloud Native Architecture removes constraints to rapid innovation.",
            "C. Cloud Native Architecture is modern for application deployment and pipelines.",
            "D. Cloud Native Architecture is a bleeding edge technology and service."
        ],
        "correct_answers": ["B. Cloud Native Architecture removes constraints to rapid innovation."]
    },
    {
        "question": "Which kubernetes component is the smallest deployable unit of computing?",
        "answer_options": [
            "A. StatefulSet",
            "B. Deployment",
            "C. Pod",
            "D. Container"
        ],
        "correct_answers": ["C. Pod"]
    },
    // {
    //     "question": "A.\nB.\nC.\nD.",
    //     "answer_options": [],
    //     "correct_answers": []
    // },
    {
        "question": "Which are the two primary modes for Service discovery within a Kubernetes cluster?",
        "answer_options": [
            "A. Environment variables and DNS",
            "B. API Calls and LDAP",
            "C. Labels and Radius",
            "D. Selectors and DHCP"
        ],
        "correct_answers": ["A. Environment variables and DNS"]
    },
    {
        "question": "Which of the following capabilities are you allowed to add to a container using the Restricted policy?",
        "answer_options": [
            "A. CHOWN",
            "B. SYS_CHROOT",
            "C. SETUID",
            "D. NET_BIND_SERVICE"
        ],
        "correct_answers": ["D. NET_BIND_SERVICE"]
    },
    {
        "question": "What methods can you use to scale a deployment?",
        "answer_options": [
            "A. With kubectl edit deployment exclusively.",
            "B. With kubectl scale-up deployment exclusively.",
            "C. With kubectl scale deployment and kubectl edit deployment.",
            "D. With kubectl scale deployment exclusively."
        ],
        "correct_answers": ["C. With kubectl scale deployment and kubectl edit deployment."]
    },
    {
        "question": "A.\nB.\nC.\nD.",
        "answer_options": [],
        "correct_answers": []
    },
    {
        "question": "Which is an industry-standard container runtime with an “emphasis” on simplicity, robustness, and portability?",
        "answer_options": [
            "A. cri-o",
            "B. lxd",
            "C. containerd",
            "D. kata-runtime"
        ],
        "correct_answers": ["C. containerd"]
    },
    {
        "question": "What does vertical scaling an application deployment describe best?",
        "answer_options": [
            "A. The act of adding/removing applications to meet demand.",
            "B. The act of adding/removing node instances to the cluster to meet demand.",
            "C. The act of adding/removing resources to applications to meet demand.",
            "D. The act of adding/removing application instances of the same application to meet demand."
        ],
        "correct_answers": ["C. The act of adding/removing resources to applications to meet demand."]
    },
    {
        "question": "A.\nB.\nC.\nD.",
        "answer_options": [],
        "correct_answers": []
    },
    {
        "question": "What is Serverless computing?",
        "answer_options": [
            "A. A computing method of providing backend services on an as-used basis.",
            "B. A computing method of providing services for AI and ML operating systems.",
            "C. A computing method of providing services for quantum computing operating systems.",
            "D. A computing method of providing services for cloud computing operating systems."
        ],
        "correct_answers": ["A. A computing method of providing backend services on an as-used basis."]
    },
    {
        "question": "What is the purpose of the CRI?",
        "answer_options": [
            "A. To provide runtime integration control when multiple runtimes are used.",
            "B. Support container replication and scaling on nodes.",
            "C. Provide an interface allowing Kubernetes to support pluggable container runtimes.",
            "D. Allow the definition of dynamic resource criteria across containers."
        ],
        "correct_answers": ["C. Provide an interface allowing Kubernetes to support pluggable container runtimes."]
    },
    {
        "question": "A.\nB.\nC.\nD.",
        "answer_options": [],
        "correct_answers": []
    },
    {
        "question": "In CNCF, who develops specifications for industry standards around container formats and runtimes?",
        "answer_options": [
            "A. Open Container Initiative (OCI)",
            "B. Linux Foundation Certification Group (LFCG)",
            "C. Container Network Interface (CNI)",
            "D. Container Runtime Interface (CRI)"
        ],
        "correct_answers": ["A. Open Container Initiative (OCI)"]
    },
    {
        "question": "Which of the following options includes valid API versions?",
        "answer_options": [
            "A. alpha1v1, beta3v3, v2",
            "B. alpha1, beta3, v2",
            "C. v1alpha1, v2beta3, v2",
            "D. v1alpha1, v2beta3, 2.0"
        ],
        "correct_answers": ["C. v1alpha1, v2beta3, v2"]
    },
    {
        "question": "Which of the following will view the snapshot of previously terminated ruby container logs from Pod web-1?",
        "answer_options": [
            "A. kubectl logs -p -c ruby web-1",
            "B. kubectl logs -c ruby web-1",
            "C. kubectl logs -p ruby web-1",
            "D. kubectl logs -p -c web-1 ruby"
        ],
        "correct_answers": ["A. kubectl logs -p -c ruby web-1"]
    },
    {
        "question": "A Kubernetes _____ is an abstraction that defines a logical set of Pods and a policy by which to access them.",
        "answer_options": [
            "A. Selector",
            "B. Controller",
            "C. Service",
            "D. Job"
        ],
        "correct_answers": ["C. Service"]
    },
    {
        "question": "How many hosts are required to set up a highly available Kubernetes cluster when using an external etcd topology?",
        "answer_options": [
            "A. Four hosts. Two for control plane nodes and two for etcd nodes.",
            "B. Four hosts. One for a control plane node and three for etcd nodes.",
            "C. Three hosts. The control plane nodes and etcd nodes share the same host.",
            "D. Six hosts. Three for control plane nodes and three for etcd nodes."
        ],
        "correct_answers": ["D. Six hosts. Three for control plane nodes and three for etcd nodes."]
    },
    {
        "question": "Which of these events will cause the kube-scheduler to assign a Pod to a node?",
        "answer_options": [
            "A. When the Pod crashes because of an error.",
            "B. When a new node is added to the Kubernetes cluster.",
            "C. When the CPU load on the node becomes too high.",
            "D. When a new Pod is created and has no assigned node."
        ],
        "correct_answers": ["D. When a new Pod is created and has no assigned node."]
    },
    {
        "question": "Which resource do you use to attach a volume in a Pod?",
        "answer_options": [
            "A. StorageVolume",
            "B. PersistentVolume",
            "C. StorageClass",
            "D. PersistentVolumeClaim"
        ],
        "correct_answers": ["D. PersistentVolumeClaim"]
    },
    {
        "question": "Which key-value store is used to persist Kubernetes cluster data?",
        "answer_options": [
            "A. etcd",
            "B. ZooKeeper",
            "C. ControlPlaneStore",
            "D. Redis"
        ],
        "correct_answers": ["A. etcd"]
    },
    {
        "question": "What Linux namespace is shared by default by containers running within a Kubernetes Pod?",
        "answer_options": [
            "A. Host Network",
            "B. Network",
            "C. Process ID",
            "D. Process Name"
        ],
        "correct_answers": ["B. Network"]
    },
    {
        "question": "What is a Dockerfile?",
        "answer_options": [
            "A. A bash script that is used to automatically build a docker image.",
            "B. A config file that defines which image registry a container should be pushed to.",
            "C. A text file that contains all the commands a user could call on the command line to assemble an image.",
            "D. An image layer created by a running container stored on the host."
        ],
        "correct_answers": ["C. A text file that contains all the commands a user could call on the command line to assemble an image."]
    },
    {
        "question": "What does the \"nodeSelector\" within a PodSpec use to place Pods on the target nodes?",
        "answer_options": [
            "Annotations",
            "B. IP Addresses",
            "C. Hostnames",
            "D. Labels"
        ],
        "correct_answers": ["D. Labels"]
    },
    {
        "question": "What do Deployments and StatefulSets have in common?",
        "answer_options": [
            "A. They manage Pods that are based on an identical container spec.",
            "B. They support the OnDelete update strategy.",
            "C. They support an ordered, graceful deployment and scaling.",
            "D. They maintain a sticky identity for each of their Pods."
        ],
        "correct_answers": ["A. They manage Pods that are based on an identical container spec."]
    },
    {
        "question": "What is the practice of bringing financial accountability to the variable spend model of cloud resources?",
        "answer_options": [
            "A. FaaS",
            "B. DevOps",
            "C. CloudCost",
            "D. FinOps"
        ],
        "correct_answers": ["D. FinOps"]
    },
    {
        "question": "What is a best practice to minimize the container image size?",
        "answer_options": [
            "A. Use a DockerFile.",
            "B. Use multistage builds.",
            "C. Build images with different tags.",
            "D. Add a build.sh script."
        ],
        "correct_answers": ["B. Use multistage builds."]
    },
    {
        "question": "Which tools enable Kubernetes HorizontalPodAutoscalers to use custom, application-generated metrics to trigger scaling events?",
        "answer_options": [
            "A. Prometheus and the prometheus-adapter.",
            "B. Graylog and graylog-autoscaler metrics.",
            "C. Graylog and the kubernetes-adapter.",
            "D. Grafana and Prometheus."
        ],
        "correct_answers": ["A. Prometheus and the prometheus-adapter."]
    },
    {
        "question": "Which of the following is a valid PromQL query?",
        "answer_options": [
            "A. SELECT * from http_requests_total WHERE job=apiserver",
            "B. http_requests_total WHERE (job=\"apiserver\")",
            "C. SELECT * from http_requests_total",
            "D. http_requests_total(job=\"apiserver\")"
        ],
        "correct_answers": ["D. http_requests_total(job=\"apiserver\")"]
    },
    {
        "question": "Which of the following best describes horizontally scaling an application deployment?",
        "answer_options": [
            "A. The act of adding/removing node instances to the cluster to meet demand.",
            "B. The act of adding/removing applications to meet demand.",
            "C. The act of adding/removing application instances of the same application to meet demand.",
            "D. The act of adding/removing resources to application instances to meet demand."
        ],
        "correct_answers": ["C. The act of adding/removing application instances of the same application to meet demand."]
    },
    {
        "question": "How many different Kubernetes service types can you define?",
        "answer_options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correct_answers": ["4"]
    },
    {
        "question": "What is the difference between a Deployment and a ReplicaSet?",
        "answer_options": [
            "A. With a Deployment, you can’t control the number of pod replicas.",
            "B. A ReplicaSet does not guarantee a stable set of replica pods running.",
            "C. A Deployment is basically the same as a ReplicaSet with annotations.",
            "D. A Deployment is basically the same as a ReplicaSet with annotations."
        ],
        "correct_answers": ["D. A Deployment is basically the same as a ReplicaSet with annotations."]
    },
    {
        "question": "The Container Runtime Interface (CRI) defines the protocol for the communication between:",
        "answer_options": [
            "A. The kubelet and the container runtime.",
            "B. The container runtime and etcd.",
            "C. The kube-apiserver and the kubelet.",
            "D. The container runtime and the image registry."
        ],
        "correct_answers": ["A. The kubelet and the container runtime."]
    },
    {
        "question": "The Container Runtime Interface (CRI) defines the protocol for the communication between:",
        "answer_options": [
            "A. The kubelet and the container runtime.",
            "B. The container runtime and etcd.",
            "C. The kube-apiserver and the kubelet.",
            "D. The container runtime and the image registry."
        ],
        "correct_answers": ["A. The kubelet and the container runtime."]
    },
    {
        "question": "Which of the following is a correct definition of a Helm chart?",
        "answer_options": [
            "A. A Helm chart is a collection of YAML files bundled in a tar.gz file and can be applied without decompressing it.",
            "B. A Helm chart is a collection of JSON files and contains all the resource definitions to run an application on Kubernetes.",
            "C. A Helm chart is a collection of YAML files that can be applied on Kubernetes by using the kubectl tool.",
            "D. A Helm chart is similar to a package and contains all the resource definitions to run an application on Kubernetes."
        ],
        "correct_answers": ["D. A Helm chart is similar to a package and contains all the resource definitions to run an application on Kubernetes."]
    },
    {
        "question": "Which of the following sentences is true about namespaces in Kubernetes?",
        "answer_options": [
            "A. You can create a namespace within another namespace in Kubernetes.",
            "B. You can create two resources of the same kind and name in a namespace.",
            "C. The default namespace exists when a new cluster is created.",
            "D. All the objects in the cluster are namespaced by default."
        ],
        "correct_answers": ["C. The default namespace exists when a new cluster is created."]
    },
    {
        "question": "How does Horizontal Pod autoscaling work in Kubernetes?",
        "answer_options": [
            "A. The Horizontal Pod Autoscaler controller adds more CPU or memory to the pods when the load is above the configured threshold, and reduces CPU or memory when the load is below.",
            "B. The Horizontal Pod Autoscaler controller adds more pods when the load is above the configured threshold, but does not reduce the number of pods when the load is below.",
            "C. The Horizontal Pod Autoscaler controller adds more pods to the specified DaemonSet when the load is above the configured threshold, and reduces the number of pods when the load is below.",
            "D. The Horizontal Pod Autoscaler controller adds more pods when the load is above the configured threshold, and reduces the number of pods when the load is below."
        ],
        "correct_answers": ["D. The Horizontal Pod Autoscaler controller adds more pods when the load is above the configured threshold, and reduces the number of pods when the load is below."]
    },
    {
        "question": "What is a Pod?",
        "answer_options": [
            "A. A networked application within Kubernetes.",
            "B. A storage volume within Kubernetes.",
            "C. A single container within Kubernetes.",
            "D. A group of one or more containers within Kubernetes."
        ],
        "correct_answers": ["D. A group of one or more containers within Kubernetes."]
    },
    {
        "question": "What element allows Kubernetes to run Pods across the fleet of nodes?",
        "answer_options": [
            "The node server",
            "The etcd static pods",
            "The API server",
            "The kubelet"
        ],
        "correct_answers": ["The kubelet"]
    },
    {
        "question": "What is the Kubernetes object used for running a recurring workload?",
        "answer_options": [
            "Job",
            "Batch",
            "DaemonSet",
            "CronJob"
        ],
        "correct_answers": ["CronJob"]
    },
    {
        "question": "In the DevOps framework and culture, who builds, automates, and offers continuous delivery tools for developer teams?",
        "answer_options": [
            "Application Users",
            "Application Developers",
            "Platform Engineers",
            "Cluster Operators"
        ],
        "correct_answers": ["Platform Engineers"]
    },
    {
        "question": "Which kubectl command is useful for collecting information about any type of resource that is active in a Kubernetes cluster?",
        "answer_options": [
            "describe",
            "list",
            "expose",
            "explain"
        ],
        "correct_answers": ["describe"]
    },
    {
        "question": "The cloud native architecture centered around microservices provides a strong system that ensures ______________",
        "answer_options": [
            "fallback",
            "resiliency",
            "failover",
            "high reachability"
        ],
        "correct_answers": ["resiliency"]
    },
    {
        "question": "Which of the following is the correct command to run a nginx deployment with 2 replicas?",
        "answer_options": [
            "kubectl run deploy nginx --image=nginx --replicas=2",
            "kubectl create deploy nginx --image=nginx --replicas=2",
            "kubectl create nginx deployment --image=nginx –replicas=2",
            "kubectl create deploy nginx --image=nginx --count=2"
        ],
        "correct_answers": ["kubectl create deploy nginx --image=nginx --replicas=2"]
    },
    {
        "question": "What does \"Continuous Integration\" mean?",
        "answer_options": [
            "The continuous integration and testing of code changes from multiple sources manually",
            "The continuous integration and testing of code changes from multiple sources via automation",
            "The continuous integration of changes from one environment to another",
            "The continuous integration of new tools to support developers in a project"
        ],
        "correct_answers": ["The continuous integration and testing of code changes from multiple sources via automation"]
    },
    {
        "question": "Which of the following options is true about considerations for large Kubernetes clusters?",
        "answer_options": [
            "Kubernetes supports up to 1000 nodes and recommends no more than 1000 containers per node",
            "Kubernetes supports up to 5000 nodes and recommends no more than 500 pods per node",
            "Kubernetes supports up to 5000 nodes and recommends no more than 110 pods per node",
            "Kubernetes supports up to 50 nodes and recommends no more than 1000 containers per node"
        ],
        "correct_answers": ["Kubernetes supports up to 5000 nodes and recommends no more than 110 pods per node"]
    },
    {
        "question": "Which component of the node is responsible to run workloads?",
        "answer_options": [
            "The kubelet",
            "The kubeproxy",
            "The kube-apiserver",
            "The container runtime."
        ],
        "correct_answers": ["The kubelet"]
    },
    {
        "question": "The IPv4/IPv6 dual stack in Kubernetes",
        "answer_options": [
            "Translates an IPv4 request from a service to an IPv6 service",
            "Allows you to access the IPv4 address by using the IPv6 address",
            "Requires NetworkPolicies to prevent services from mixing requests",
            "Allows you to create IPv4 and IPv6 dual stack services"
        ],
        "correct_answers": ["Allows you to create IPv4 and IPv6 dual stack services"]
    },
    {
        "question": "What does \"continuous\" mean in the context of CI/CD?",
        "answer_options": [
            "Frequent releases, Manual processes, Repeatable, Fast processing",
            "Periodic releases, Manual processes, Repeatable, Automated Processing",
            "Frequent releases, Automated processes, Repeatable, Fast processing",
            "Periodic releases, Automated processes, Repeatable, Automated processing"
        ],
        "correct_answers": ["Frequent releases, Automated processes, Repeatable, Fast processing"]
    },
    {
        "question": "What is ephemeral storage?",
        "answer_options": [
            "Storage space that need not persist across restarts",
            "Storage that may grow dynamically",
            "Storage used by multiple consumers (e.g. multiple Pods)",
            "Storage that is always provisioned locally"
        ],
        "correct_answers": ["Storage space that need not persist across restarts"]
    },
    {
        "question": "What is the reference implementation of the OCI runtime specification?",
        "answer_options": [
            "lxc",
            "cri-o",
            "runc",
            "docker"
        ],
        "correct_answers": ["runc"]
    },
    {
        "question": "What is a Service?",
        "answer_options": [
            "A static network mapping from a Pod to a port",
            "A way to expose an application running on a set of Pods",
            "The network configuration for a group of Pods",
            "An NGINX load balancer that gets deployed for an application"
        ],
        "correct_answers": ["A way to expose an application running on a set of Pods"]
    },
    {
        "question": "What's the difference between a security profile and a security context?",
        "answer_options": [
            "Security Contexts configure Clusters and Namespaces at runtime. Security profiles are control plane mechanisms to enforce specific settings in the Security Context",
            "Security Contexts configure Pods and Containers at runtime. Security profiles are control plane mechanisms to enforce specific settings in the Security Context",
            "Security Profiles configure Pods and Containers at runtime. Security Contexts are control plane mechanisms to enforce specific settings in the Security Profile",
            "Security Profiles configure Clusters and Namespaces at runtime. Security Contexts are control plane mechanisms to enforce specific settings in the Security Profile"
        ],
        "correct_answers": ["Security Contexts configure Pods and Containers at runtime. Security profiles are control plane mechanisms to enforce specific settings in the Security Context"]
    },
    {
        "question": "At which layer would distributed tracing be implemented in a cloud native deployment?",
        "answer_options": [
            "Network",
            "Application",
            "Database",
            "Infrastructure"
        ],
        "correct_answers": ["Application"]
    },
    {
        "question": "What framework does Kubernetes use to authenticate users with JSON Web Tokens?",
        "answer_options": [
            "OpenID Connect",
            "OpenID Container",
            "OpenID Cluster",
            "OpenID CNCF"
        ],
        "correct_answers": ["OpenID Connect"]
    },
    {
        "question": "Which of the following is a feature Kubernetes provides by default as a container orchestration tool?",
        "answer_options": [
            "A portable operating system",
            "File system redundancy",
            "A container image registry",
            "Automated rollouts and rollbacks"
        ],
        "correct_answers": ["Automated rollouts and rollbacks"]
    },
    {
        "question": "Which of the following sentences is true about container runtimes in Kubernetes?",
        "answer_options": [
            "If you let iptables see bridged traffic, you don't need a container runtime",
            "If you enable IPv4 forwarding, you don't need a container runtime",
            "Container runtimes are deprecated, you must install CRI on each node",
            "You must install a container runtime on each node to run pods on it"
        ],
        "correct_answers": ["You must install a container runtime on each node to run pods on it"]
    },
    {
        "question": "If a Pod was waiting for container images to download on the scheduled node, what state would it be in?",
        "answer_options": [
            "Failed",
            "Succeeded",
            "Unknown",
            "Pending"
        ],
        "correct_answers": ["Pending"]
    },
    {
        "question": "Which one of the following is an open source runtime security tool?",
        "answer_options": [
            "lxd",
            "containerd",
            "falco",
            "gvisor"
        ],
        "correct_answers": ["falco"]
    },
    {
        "question": "Which of the following scenarios would benefit the most from a service mesh architecture?",
        "answer_options": [
            "A few applications with hundreds of pod replicas running in multiple clusters, each one providing multiple services.",
            "Thousands of distributed applications running in a single cluster, each one providing multiple services.",
            "Tens of distributed applications running in multiple clusters, each one providing multiple services.",
            "Thousands of distributed applications running in multiple clusters, each one providing multiple services."
        ],
        "correct_answers": ["Thousands of distributed applications running in multiple clusters, each one providing multiple services."]
    },
    {
        "question": "Which of these is a valid container restart policy?",
        "answer_options": [
            "On login",
            "On update",
            "On start",
            "On failure"
        ],
        "correct_answers": ["On failure"]
    }
]
