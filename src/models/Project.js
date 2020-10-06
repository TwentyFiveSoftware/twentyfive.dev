export default class Project {
    constructor(name, githubRepoName, image) {
        this.name = name;
        this.githubUrl = githubRepoName;
        this.image = image;
    }

    fetchGithubRepoInfo = async () => {
        let repos = await fetch('https://api.github.com/users/TwentyFiveSoftware/repos');
        repos = await repos.json();

        const repo = repos.find(r => r.name === this.githubUrl);

        return {description: repo.description, projectUrl: repo.homepage, githubUrl: `https://github.com/TwentyFiveSoftware/${this.githubUrl}`}
    }
}
