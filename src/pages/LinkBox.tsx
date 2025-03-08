import { useState } from "react";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import { FaGithub, FaTwitter, FaLinkedin, FaPlus, FaLink, FaTrash } from "react-icons/fa";

export default function LinkBox() {
  const [tags, setTags] = useState([{ name: "", url: "" }]);

  const handleTagChange = (index: number, field: "name" | "url", value: string) => {
    const newTags = [...tags];
    newTags[index][field] = value;
    setTags(newTags);
  };

  const addTag = () => {
    setTags([...tags, { name: "", url: "" }]);
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <ComponentCard title="Links Box">
      <div className="space-y-6">
        <div>
          <Label htmlFor="github">GitHub Profile</Label>
          <div className="relative">
            <Input type="text" id="github" placeholder="Enter GitHub profile URL" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <FaGithub className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="arxiv">Arxiv Profile</Label>
          <Input type="text" id="arxiv" placeholder="Enter Arxiv profile URL" />
        </div>
        <div>
          <Label htmlFor="twitter">Twitter Profile</Label>
          <div className="relative">
            <Input type="text" id="twitter" placeholder="Enter Twitter profile URL" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <FaTwitter className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <div className="relative">
            <Input type="text" id="linkedin" placeholder="Enter LinkedIn profile URL" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <FaLinkedin className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label>Custom Links</Label>
          <div className="space-y-4">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Input
                  type="text"
                  placeholder="Tag Name"
                  value={tag.name}
                  onChange={(e) => handleTagChange(index, "name", e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Tag URL"
                  value={tag.url}
                  onChange={(e) => handleTagChange(index, "url", e.target.value)}
                />
                <button onClick={() => removeTag(index)} className="text-red-500 hover:text-red-700">
                  <FaTrash className="size-5" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addTag}
            className="mt-4 flex items-center space-x-2 text-blue-500 hover:text-blue-700"
          >
            <FaPlus className="size-5" /> <span>Add Link</span>
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}
